const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 4) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

//This function will be called when user click changing language
function translate(lng, tagAttr) {
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if (lng == "en") {
        $("#enTranslator").css("color", "#f4623a");
        $("#idTranslatoe").css("color", "#212529");
    }
    if (lng == "id") {
        $("#idTranslatoe").css("color", "#f4623a");
        $("#enTranslator").css("color", "#212529");
    }
}
$(document).ready(function () {
    //This is id of HTML element (English) with attribute lng-tag
    $("#enTranslator").click(function () {
        translate("en", "lng-tag");
    });
    //This is id of HTML element (idmer) with attribute lng-tag
    $("#idTranslator").click(function () {
        translate("id", "lng-tag");
    });
});
