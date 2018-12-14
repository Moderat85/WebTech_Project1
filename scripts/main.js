"use strict";

function templatesAreSupported() {
    if ('content' in document.createElement('template')) {
        return true;
    }

    return false;
}

function onLoad() {
    if (!templatesAreSupported()) {
        alert("Templates are not supported in your browser");4
    }
}

function appendTemplateContent(templateId) {
    const template = document.querySelector("#" + templateId);
        
    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}
