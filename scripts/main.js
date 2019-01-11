"use strict";

function templatesAreSupported() {
    if ('content' in document.createElement('template')) {
        return true;
    }

    return false;
}

function onLoad() {
    if (!templatesAreSupported()) {
        alert("Templates are not supported in your browser");
    }
}

function appendTemplateContent(templateId) {
    const template = document.querySelector("#" + templateId);
        
    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

let navigationIsVisible = true;
function showOrHideNavigation() {
    const element = document.getElementById("navigation");
    const mainElement = document.getElementById("main");

    if (navigationIsVisible) {
        element.classList.add("nav-invisible");
        mainElement.classList.add("gridlayout-without-nav");
        navigationIsVisible = false;
    }
    else {
        element.classList.add("nav-visible");
        element.classList.remove("nav-invisible");
        mainElement.classList.remove("gridlayout-without-nav");
        navigationIsVisible = true;
    }
}
