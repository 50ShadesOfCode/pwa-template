var installPromptEvent,
    btnInstall = document.getElementById("install")

window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    installPromptEvent = event;
    btnInstall.removeAttribute("disabled");
});

btnInstall.addEventListener("click", function () {
    btnInstall.setAttribute("disabled", "");
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then(function (t) {
        "accepted" === t.outcome ? console.log("User accepted the A2HS prompt") : console.log("User dismissed the A2HS prompt");
    installPromptEvent = null;
    })
});
