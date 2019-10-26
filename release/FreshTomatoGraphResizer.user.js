// ==UserScript==
// @name         Graph resizing script for Tomato firmware. 
// @namespace    https://github.com/tsg2k2
// @version      0.4
// @description  Workaround for hardcoded graph width 
// @author       tsg2k2
// @include      http*/bwm-graph.svg*
// @include      http*/bwm-realtime.asp*
// @include      http*/bwm-24.asp*
// @include      http*/ipt-realtime.asp*
// @include      http*/ipt-24.asp*
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

    let targetNode = document.getElementById('content');
    if (targetNode && targetNode.tagName === 'TD') {
        targetNode.classList.add('dynamic'); // enables related css styling
    }
})();
