// ==UserScript==
// @name         customBG
// @namespace    https://github.com/zekwho/customBG
// @version      1.0.0
// @description  Adds custom background to CE
// @author       ZEK [3369]
// @match        https://cartelempire.online/*
// @icon         https://i.imghippo.com/files/fvOZp1725584352.webp
// @grant        GM_addStyle
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/zekwho/customBG/
// @downloadURL  https://raw.githubusercontent.com/zekwho/customBG/
// ==/UserScript==

(function() {
    function updateBackground(themeSelector, containerSelector, newBackgroundUrl) {
        var container = document.querySelector(`${themeSelector} ${containerSelector}`);
        
        if (container) {
            container.style.backgroundImage = newBackgroundUrl;
        }
    }

    // Replace the background of the content container for both dark and light themes
    updateBackground('[data-bs-theme=dark]', '.content-container',
        "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('https://i.imghippo.com/files/gRLWu1725495937.webp')");

    updateBackground('[data-bs-theme=light]', '.content-container',
        "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url('https://i.imghippo.com/files/dptzG1725496167.jpg')");

    // Replace the background of the hospital for both dark and light themes
    updateBackground('[data-bs-theme=dark]', '.contentColumn.hospitalBackground',
        "linear-gradient(to right, rgba(255,0,0,0.05), rgba(255, 0, 0, 0.2), rgba(255,0,0,0.05)), url('https://i.imghippo.com/files/1WQzG1725495737.jpg')");

    updateBackground('[data-bs-theme=light]', '.contentColumn.hospitalBackground',
        "linear-gradient(to right, rgba(255,0,0,0.05), rgba(255, 0, 0, 0.2), rgba(255,0,0,0.05)), url('https://i.imghippo.com/files/1WQzG1725495737.jpg')");

    // Replace the background of the jail for both dark and light themes
    updateBackground('[data-bs-theme=dark]', '.contentColumn.jailBackground',
        "linear-gradient(to right, rgba(47,0,255,0.05), rgba(47, 0, 255, 0.2), rgba(47,0,255,0.05)), url('https://i.imghippo.com/files/IRaeK1725495667.jpg')");

    updateBackground('[data-bs-theme=light]', '.contentColumn.jailBackground',
        "linear-gradient(to right, rgba(47,0,255,0.05), rgba(47, 0, 255, 0.2), rgba(47,0,255,0.05)), url('https://i.imghippo.com/files/IRaeK1725495667.jpg')");

})();
