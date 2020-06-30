// ==UserScript==
// @name         Red accent helper
// @namespace    https://github.com/tsg2k2
// @version      0.6
// @description  Enables red color accent
// @author       tsg2k2
// @include      /^https?:\/\/192\.168\.\d+\.\d+.+$/
// @include      /^https?://freshtomato/?$/
// @include      /^https?://homerouter/?$/
// @grant        none
// @run-at       document-body
// ==/UserScript==



(function() {
    'use strict';
    let targetNode = document.body;
    if (targetNode) {
        targetNode.classList.add("red");
    }
})();
