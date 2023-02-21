// ==UserScript==
// @name         Youtube Auto "I understand and wish to proceed"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto click the "I understand and wish to proceed" in age-restricted videos.
// @author       khaled-0
// @match        https://www.youtube.com/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        const consentBtn = document.querySelector("[aria-label=\"I understand and wish to proceed\"]");
        if(consentBtn == null) return;
        consentBtn.click();
        consentBtn.remove();
    }, 10)();
})();
