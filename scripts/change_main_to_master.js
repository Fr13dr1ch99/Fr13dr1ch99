// ==UserScript==
// @name         MainToMaster
// @namespace    https://friedrichlucas.de
// @version      0.1
// @description  change the main to master on github new repositorys!
// @author       Fr13dr1ch
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function() {
    let newRepoElement = document.getElementById("empty-setup-new-repo-echo");

    if(newRepoElement != null) {
        for(let child of newRepoElement.children) {
            child.innerHTML = child.innerHTML.replace(/main/g, "master");
        }
    }

    let newRepoElement2 = document.getElementById("empty-setup-push-repo-echo");
    if(newRepoElement2 != null) {
        for(let child of newRepoElement2.children) {
            child.innerHTML = child.innerHTML.replace(/main/g, "master");
        }
    }
});
