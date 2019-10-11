// ==UserScript==
// @name         Column-based layout helper
// @namespace    https://github.com/tsg2k2
// @version      0.6
// @description  Enables column-based layout and and applies DOM fixes
// @author       tsg2k2
// @include      http*://192.168.1.*/$
// @include      http*://freshtomato/
// @include      http*://homerouter/
// @include      */basic-network.asp
// @include      */advanced-wireless.asp
// @include      */advanced-ctnf.asp
// @include      */advanced-firewall.asp
// @include      */advanced-adblock.asp
// @include      */advanced-routing.asp
// @include      */qos-settings.asp
// @include      */nas-ftp.asp
// @include      */nas-samba.asp
// @include      */vpn-pptp-server.asp
// @include      */admin-access.asp
// @include      */admin-tomatoanon.asp
// @include      */admin-log.asp
// @include      */admin-sched.asp
// @include      */admin-access.asp
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    const wrap = function(title) {
        var wrapper = document.createElement('div');
        var nextSibling = title.nextElementSibling;
        wrapper.classList.add('tile');
        title.parentNode.insertBefore(wrapper, title);
        wrapper.appendChild(title);
        wrapper.appendChild(nextSibling);
        if (nextSibling.id) {
            wrapper.id = nextSibling.id + '-tile';
        }
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
