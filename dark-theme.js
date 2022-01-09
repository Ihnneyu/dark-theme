// ==UserScript==
// @name         Darkmode
// @namespace    com.acbpro.darkmode
// @version      2.3
// @description  dark-mode
// @author       You
// @match        https://www.thegioididong.com/*
// @grant        GM_xmlhttpRequest
// @connect  https://github.com/Ihnneyu/dark-theme/blob/main/dark-theme.min.css
// @connect  self
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/components/notification.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit-icons.min.js
// @require      https://unpkg.com/jszip@3.2.1/dist/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.0.2/jszip-utils.min.js
// @require      https://unpkg.com/file-saver@2.0.1/dist/FileSaver.min.js
// @updateURL   https://github.com/Ihnneyu/dark-theme/blob/main/dark-theme.js
// @downloadURL https://github.com/Ihnneyu/dark-theme/blob/main/dark-theme.js
// @license MIT
// ==/UserScript==

(function () {
  'use strict';
  var Promise = window.Promise;
  if (!Promise) {
    Promise = JSZip.external.Promise;
  }
  const http = GM_xmlhttpRequest;

  var base = window.document.createElement('base');
  base.setAttribute('href', '/');
  document.head.appendChild(base);
  loadCSS('https://raw.githubusercontent.com/Ihnneyu/dark-theme/main/dark-theme.css');
  document.body.setAttribute("class", "dark-theme");
})();
function loadCSS(url) {
  var link = window.document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  var meta = window.document.createElement('meta');
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  var style = window.document.createElement('style');
  fetch(url).then((r)=>{r.text().then((data)=>{ var css = data; var node = window.document.createTextNode(css);
  style.appendChild(node);})});  
  document.head.appendChild(meta);
  document.head.appendChild(link);
  document.head.appendChild(style);
}
