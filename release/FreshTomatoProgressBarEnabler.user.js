// ==UserScript==
// @name         Dynamic Progress Bars for Tomato Status page
// @namespace    https://github.com/tsg2k2
// @version      0.1
// @description  Makes progress bars visible by tracking the relevant value updates
// @author       tsg2k2
// @include      http://192.168.1.1/
// @include      http://freshtomato/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const config = { characterData: true, childList: true, subtree: true };

    const update = function(element) {
        if (element.childNodes.length > 0) {
            var percent = element.childNodes[element.childNodes.length-1].textContent.split(" ");
            percent = percent[percent.length - 1];
            element.style = '--data-percent:' + percent.replace(/[^\d.-]/g, '') + 'px';
        }
    }

    const callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutationsList.forEach( (m, i) => {
                    update(m.target);
                } );
            }
        }
    };

    const observer = new MutationObserver(callback);

    var targetNode = document.getElementById('memory').lastElementChild;
    update(targetNode);
    observer.observe(targetNode, config);

    targetNode = document.getElementById('swap').nextElementSibling.lastElementChild;
    update(targetNode);
    observer.observe(targetNode, config);

    targetNode = document.getElementById('cpupercent').lastElementChild;
    update(targetNode);
    observer.observe(targetNode, config);

    targetNode = document.getElementById('temps').lastElementChild;
    update(targetNode);
    observer.observe(targetNode, config);

    targetNode = document.getElementById('swap').lastElementChild;
    update(targetNode);
    observer.observe(targetNode, config);


})();
