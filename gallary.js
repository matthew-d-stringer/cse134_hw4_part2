function init() {
    let localBtn = document.getElementById("localBtn");
    let remoteBtn = document.getElementById("remoteBtn");

    localBtn.addEventListener("click", function () {
        loadLocal();
    });
    
    remoteBtn.addEventListener("click", function () {
        loadRemote();
    });
}

function loadLocal() {
}

function loadRemote() {
}

window.addEventListener("DOMContentLoaded", init);