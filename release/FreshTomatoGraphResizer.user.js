// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http*/bwm-graph.svg*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const element = top.document.getElementsByTagName("embed")[0];
    const observer = new ResizeObserver(entries => {
        if( vWidth && svgDocument) {
            vWidth = svgDocument.rootElement.clientWidth - 10;
            top.showDraw();
            top.showCTab();
        }
    });
    observer.observe(element);
})();