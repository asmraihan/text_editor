const textarea = document.getElementById("textarea1");

window.addEventListener('load', () => {
    textarea.style.textTransform = "capitalize";
    // textarea.value = "";
});

function fontSize(id) {
    let value = id.value;
    textarea.style.fontSize = value + "px";
}

function fontBold(id) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        id.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        id.classList.add("active");
    }
}

function fontItalic(id) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        id.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        id.classList.add("active");
    }
}

function fontUnderLine(id) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        id.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        id.classList.add("active");
    }
}

function alignLeft(id) {
    textarea.style.textAlign = "left";
}

function alignCenter(id) {
    textarea.style.textAlign = "center";
}

function alignRight(id) {
    textarea.style.textAlign = "right";
}

function caseChange(id) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        id.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        id.classList.add("active");
    }
}

function eraseAll() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function textColor(id) {
    let value = id.value;
    textarea.style.color = value;
}

