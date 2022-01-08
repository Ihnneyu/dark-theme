// ==UserScript==
// @name         Darkmode
// @namespace    com.acbpro.darkmode
// @version      2.3
// @description  Blogtruyen helper
// @author       You
// @match        https://www.thegioididong.com/*
// @grant        GM_xmlhttpRequest
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/components/notification.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit-icons.min.js
// @require      https://unpkg.com/jszip@3.2.1/dist/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.0.2/jszip-utils.min.js
// @require      https://unpkg.com/file-saver@2.0.1/dist/FileSaver.min.js
// @updateURL   https://openuserjs.org/meta/trungking/Blocktruyen_Helper.meta.js
// @downloadURL 
// @license MIT
// ==/UserScript==

(function () {
  'use strict';
  log('Blogtruyen Helper started');
  var Promise = window.Promise;
  if (!Promise) {
    Promise = JSZip.external.Promise;
  }
  const http = GM_xmlhttpRequest;
  const id = '#bt-helper-offcanvas';
  const body = 'body:not(#tinymce)';
  const jsZip = new JSZip();

  loadCSS('https://github.com/Ihnneyu/dark-theme/blob/main/drak-theme.css');
  injectJS();
  $(offcanvas).appendTo(body);


  function urlToPromise(url, key) {
    var urlObj = new URL(url),
      urlPro = urlObj.protocol,
      urlHost = urlObj.hostname,
      urlRef = referer[urlHost] ? referer[urlHost] : urlHost,
      urlOri = urlPro + '//' + urlRef;
    return new Promise(function (resolve, reject) {
      http({
        method: 'GET',
        url: url,
        headers: {
          referer: urlOri,
          origin: urlOri
        },
        responseType: 'arraybuffer',
        onload: function (response) {
          if (response.response.byteLength < 10000 || (response.statusText !== 'OK' && response.statusText !== '')) {
            log(response);
            reject();
          }
          else {
            downloaded++;
            updateStatus();
            resolve(response.response);
          }
        },
        onerror: function (err) {
          reject(err);
        }
      });
    });
  }
})();

function toArray(obj) {
  return $.map(obj, function (value, index) {
    return [value];
  });
}

function loadCSS(url) {
  var link = window.document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName("HEAD")[0].appendChild(link);
}