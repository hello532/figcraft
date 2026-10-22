// FigCraft Guide — shared behaviour: theme, mobile nav, copy-to-clipboard, share links.
(function () {
  'use strict';
  var root = document.documentElement;
  var KEY = 'figcraft-theme';

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function syncThemeButtons() {
    var dark = currentTheme() === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.textContent = dark ? '☀' : '☾';
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', dark ? 'Light theme' : 'Dark theme');
    });
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-theme-toggle], [data-copy], [data-cite], [data-share]');
    if (!t) return;

    if (t.hasAttribute('data-theme-toggle')) {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      syncThemeButtons();
      return;
    }

    if (t.hasAttribute('data-share')) {
      var url = t.getAttribute('data-share') || location.href;
      var shareData = { title: document.title, url: url };
      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else {
        copy(url, t);
      }
      return;
    }

    if (t.hasAttribute('data-copy')) {
      copy(t.getAttribute('data-copy'), t);
      return;
    }

    if (t.hasAttribute('data-cite')) {
      var text = t.getAttribute('data-cite') || '';
      copy(text, t);
    }
  }, false);

  function flash(el, text, ok) {
    var original = el.getAttribute('data-label') || el.textContent;
    el.setAttribute('data-label', original);
    el.textContent = text;
    el.classList.toggle('status', true);
    el.classList.toggle('ok', !!ok);
    el.classList.toggle('bad', !ok);
    clearTimeout(el._flashTimer);
    el._flashTimer = setTimeout(function () {
      el.textContent = original;
      el.classList.remove('ok', 'bad');
    }, 1600);
  }

  function copy(text, el) {
    var done = function (ok) {
      if (el) flash(el, ok ? 'Copied' : 'Copy failed', ok);
      var note = document.querySelector('[data-copy-status]');
      if (note) {
        note.textContent = ok ? 'Copied to clipboard.' : 'Copy failed — select the text and copy manually.';
        note.className = 'status ' + (ok ? 'ok' : 'bad');
      }
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
  }

  document.addEventListener('DOMContentLoaded', function () {
    syncThemeButtons();
    var toggle = document.querySelector('[data-nav-toggle]');
    var mobile = document.getElementById('mobile-nav');
    if (toggle && mobile) {
      toggle.addEventListener('click', function () {
        var open = mobile.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  });

  if (document.readyState !== 'loading') syncThemeButtons();
})();
