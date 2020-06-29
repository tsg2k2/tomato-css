// ==UserScript==
// @name         Blue accent helper
// @namespace    https://github.com/tsg2k2
// @version      0.2
// @description  Enables column-based layout and applies DOM fixes
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
        let style = '--tomato-accent-color: #2180de;';
        targetNode.style = style;
    }
})();
