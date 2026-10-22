// /tools/ — one page, five panels. Keeps the hash in step with the URL so a
// tool can be linked directly (/tools/#palette) and survives a reload.
(function () {
  'use strict';
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-tab]'));
  if (!tabs.length) return;

  var panels = {};
  tabs.forEach(function (tab) {
    var id = tab.getAttribute('aria-controls');
    var panel = id && document.getElementById(id);
    if (panel) panels[tab.dataset.tab] = panel;
  });

  var order = tabs.map(function (t) { return t.dataset.tab; });

  function setHash(name, replace) {
    var url = new URL(location.href);
    if (url.hash === '#' + name) return;
    url.hash = name;
    if (replace) history.replaceState(null, '', url.href);
    else location.hash = name;
  }

  function activate(name, opts) {
    opts = opts || {};
    if (order.indexOf(name) === -1) name = order[0];
    tabs.forEach(function (tab) {
      var on = tab.dataset.tab === name;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      var panel = panels[tab.dataset.tab];
      if (panel) panel.hidden = !on;
    });
    // Only the active panel should be reachable by keyboard.
    Object.keys(panels).forEach(function (key) {
      panels[key].setAttribute('aria-hidden', key === name ? 'false' : 'true');
    });
    if (opts.push !== false) setHash(name, opts.replace);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      activate(tab.dataset.tab, { replace: true });
    });
    tab.addEventListener('keydown', function (ev) {
      var next = null;
      if (ev.key === 'ArrowRight') next = order[(i + 1) % order.length];
      else if (ev.key === 'ArrowLeft') next = order[(i - 1 + order.length) % order.length];
      else if (ev.key === 'Home') next = order[0];
      else if (ev.key === 'End') next = order[order.length - 1];
      if (!next) return;
      ev.preventDefault();
      activate(next, { replace: true });
      var el = tabs.find(function (t) { return t.dataset.tab === next; });
      if (el) el.focus();
    });
  });

  window.addEventListener('hashchange', function () {
    var name = location.hash.replace(/^#/, '');
    if (name && order.indexOf(name) !== -1) activate(name, { push: false });
  });

  // Restore the tab from the hash, then scroll to it if the browser already did.
  var initial = location.hash.replace(/^#/, '');
  activate(order.indexOf(initial) !== -1 ? initial : order[0], { push: false });
})();
