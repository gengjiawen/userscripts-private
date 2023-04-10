// ==UserScript==
// @name         remove mark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        *://bpm.vivo.xyz/*
// @match        *://pms.vivo.xyz/*
// @match        *://*.vivo.xyz/*
// @match        *://*.vmic.xyz/*
// @match        *://it-stock.vivo.xyz/*
// @icon         https://www.google.com/s2/favicons?domain=vivo.xyz
// @run-at document-idle
// @grant        GM_addStyle

// ==/UserScript==

(function () {
  GM_addStyle("div#wm_div_id { display: none }");
  GM_addStyle("div.__wm { display: none }");
})();
