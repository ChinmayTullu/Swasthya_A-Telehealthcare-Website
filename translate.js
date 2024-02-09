let el=document.createElement("script");
let body=document.querySelector("body");

el.type="text/javascript";
el.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

body.appendChild(el);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLang: "en"
    }, "translate");
}

const translateLang= () => {
    let lang=document.querySelector("#translate").value;
    let selectField=document.querySelector("#translate select");
    for(let i=0; i<selectField.children.length; i++) {
        let option=selectField.children[i];
        if(option.value==lang)
        {
            selectField.selectedIndex=i;
            selectField.dispatchEvent(new Event("change"));
            break;
        }
    }
}




