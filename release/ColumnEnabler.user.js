// ==UserScript==
// @name         Column-based layout helper
// @namespace    https://github.com/tsg2k2
// @version      0.2
// @description  Enables column-based layout and and applies DOM fixes
// @author       tsg2k2
// @include      http://192.168.1.1/
// @include      http://freshtomato/
// @include      http://homerouter/
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    const wrap = function(title) {
        var wrapper = document.createElement('div');
        var nextSibling = title.nextSibling;
        wrapper.classList.add('tile');
        title.parentNode.insertBefore(wrapper, title);
        wrapper.appendChild(title);
        wrapper.appendChild(nextSibling);
    };

    let targetNode = document.getElementById('content');
    if (targetNode && targetNode.tagName === 'TD') {
        let titles = targetNode.querySelectorAll("#content > div.section-title");
        for (let title of titles) {
            wrap(title);
        }
        targetNode.classList.add('tiles'); // enables columns in css
    }
})();