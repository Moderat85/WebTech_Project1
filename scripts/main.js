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

function appendNews() {
    const template = document.querySelector("#newsTemplate");
        
    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

function appendBio() {
    const template = document.querySelector("#bioTemplate");
        
    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

function appendalbum() {
    const template = document.querySelector("#albumTemplate");

    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

function appendaccident() {
    const template = document.querySelector("#accidentTemplate");

    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

function appendfoundation() {
    const template = document.querySelector("#foundationTemplate");

    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}

function appendcontact() {
    const template = document.querySelector("#contactTemplate");

    if (template != null) {
        const main = document.querySelector("main");
        main.innerHTML = template.innerHTML;
    }
}