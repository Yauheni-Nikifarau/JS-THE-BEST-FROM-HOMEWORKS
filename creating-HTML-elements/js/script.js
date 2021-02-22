let metaCharset = document.createElement("meta"),
    metaAuthor = document.createElement("meta"),
    metaKeyWords = document.createElement("meta"),
    metaDescription = document.createElement("meta"),
    metaViewport = document.createElement("meta"),
    pageTitle = document.createElement("title"),
    fonts = document.createElement("link"),
    styles = document.createElement("style");


metaCharset.setAttribute("charset", "UTF-8");

metaAuthor.setAttribute("name", "author");
metaAuthor.setAttribute("content", "Yauheni Nikifarau");

metaKeyWords.setAttribute("name", "keywords");
metaKeyWords.setAttribute("content", "form, call to action");

metaDescription.setAttribute("name", "description");
metaDescription.setAttribute("content", "choosing form");

metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

pageTitle.textContent = "Document";

fonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans");

styles.innerHTML = `* {
    margin: 0;
    padding: 0;
}
.callToAction {
    width: 800px;
    padding-top: 40px;
    margin: 0 auto;
    text-align: center;
    color: #9fa3a7;
}
.callToAction-Header {
    margin-bottom: 10px;
    font-size: 36px;
    font-family: Arvo;
    color: #212121;
    text-transform: capitalize;
}
.callToAction-Text {
    font-size: 14px;
    font-family: "Open Sans";
    margin-bottom: 55px;
}
.callToAction-Form {
    display: flex;
}
.form-block {
    padding: 80px 95px;
    border: 2px solid #9fa3a7;
}
.freelancer {
    border-right: none;
}
.studio {
    border-color: #8F75BE;
    background-color: #8F75BE;
}
.block-value {
    font-family: Montserrat;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
    margin-bottom: 20px;
}
.block-title {
    font-size: 36px;
    font-family: Arvo;
    font-weight: 400;
    margin-bottom: 25px;
}
.block-text {
    font-family: "Open Sans";
    font-size: 12px;
    line-height: 22px;
    margin-bottom: 50px;
}
.block-button {
    background-color: transparent;
    padding: 23px 35px;
    border: 3px solid #FFC80A;
    border-radius: 35px;
    font-family: Montserrat;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    font-weight: 700;
}
.block-button:focus {
    outline: none;
}
.freelancer .block-title, .freelancer .block-button {
    color: #212121;
}
.studio .block-value {
    color: #ffc80a;
}
.studio, .studio .block-button {
    color: #fff;
}`

let headArray = [metaCharset, metaViewport, metaKeyWords, metaDescription, metaAuthor, fonts, styles, pageTitle];

for (let item of headArray) document.head.appendChild(item);

let mainContainer = document.createElement("div"),
    element = document.createElement("div");

element.classList.add("callToAction");

let callToActionHeader = document.createElement("h2");

callToActionHeader.classList.add("callToAction-Header");
callToActionHeader.textContent = "Choose your option";

let callToActionText = document.createElement("p");

callToActionText.classList.add("callToAction-Text");
callToActionText.textContent = "But I must explain to you how all this mistaken idea of denouncing";

let form = document.createElement("form");

form.setAttribute("method", "GET");
form.setAttribute("action", "#");
form.classList.add("callToAction-Form");

let freelancerBlock = new FormBlock("freelancer"),
    studioBlock = new FormBlock("studio");

form.appendChild(freelancerBlock);
form.appendChild(studioBlock);

let elementArray = [callToActionHeader, callToActionText, form];





for (let item of elementArray) element.appendChild(item);
mainContainer.appendChild(element);
document.body.appendChild(mainContainer);






function FormBlock (value) {
    this.block = document.createElement("div");
    let blockValue = document.createElement("p"),
        blockTitle = document.createElement("h3"),
        blockText = document.createElement("p"),
        blockButton = document.createElement("button");

    this.block.classList.add("form-block");
    this.block.classList.add(value);
    blockValue.classList.add("block-value");
    blockTitle.classList.add("block-title");
    blockText.classList.add("block-text");
    blockButton.classList.add("block-button");
    blockButton.setAttribute("name", "plan");
    blockButton.setAttribute("value", value);

    blockValue.textContent = value;
    blockTitle.textContent = "Initially designed to";
    blockText.textContent = "But I must explain to you how all this mistaken idea of denouncing";
    blockButton.textContent = "start here";

    let blockArray = [blockValue, blockTitle, blockText, blockButton];

    for (let item of blockArray) this.block.appendChild(item);

    return this.block;

}
