// ==UserScript==
// @name         Dynamic Progress Bars for Tomato Status page
// @namespace    https://github.com/tsg2k2
// @version      0.2
// @description  Makes progress bars visible by tracking the relevant value updates
// @author       tsg2k2
// @include      /^https?://192\.168\.\d+\.\d/?$/
// @include      http://freshtomato/
// @include      http://homerouter/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const config = { characterData: true, childList: true, subtree: true };

    const update = function(element) {
        if (element.childNodes.length > 0) {
            var value = [...element.childNodes]
            .map( n => n.textContent.split(" ")).flat()
            .map( t => Number(t.replace(/[^\d.-]/g, ''))).filter( n => n > 0)
            .slice(-1)[0];

            //var value = element.childNodes[element.childNodes.length - 1].textContent.split(" ");
            //value = value[value.length - 1];
            element.style = '--data-percent:' + value + 'px';
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

    const hook = function(id, childSelector) {
        let targetNode = document.getElementById(id);
        if (targetNode) {
            targetNode = childSelector ? childSelector(targetNode) : targetNode = targetNode.lastElementChild;
            if (targetNode) {
                update(targetNode);
                observer.observe(targetNode, config);
            }
        }
    }

    hook('memory');
    hook('cpupercent');
    hook('temps');
    hook('swap');
    hook('swap', t => t.nextElementSibling.lastElementChild);
    hook('rate0');
    hook('rate1');
    hook('rate2');
    hook('nbw0');
    hook('nbw1');
    hook('nbw2');
})();
