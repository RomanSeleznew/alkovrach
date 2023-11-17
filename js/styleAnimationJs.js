const navbarMobile = document.getElementById("mobileNavbar");
const navbar = document.getElementById("navbarHeader");
const body = document.getElementById('body');
const closeNavbar = document.getElementById('closeMenu');

navbarMobile.onclick = function() {
    navbar.classList.add("activNavbarHeader");
    body.classList.add("activPopup");
}

closeNavbar.onclick = function() {
    navbar.classList.remove("activNavbarHeader");
    body.classList.remove("activPopup");
}

const list = document.getElementById("animationPageWraper");

const animationList = list => {
    setTimeout(() => {
        list.classList.add('animationWraper');
    }, 500);
    return;
}
animationList(list);


const formPage = document.getElementById("formPage");

const animationForm = formPage => {
    setTimeout(() => {
        formPage.classList.add('animationFormPage');
    }, 1000);
    return;
}
animationList(formPage);


const decorations = document.getElementById('decorations');

const animationDecorations = decorations => {
    setTimeout(() => {
        decorations.classList.add('animationDecorations');
    }, 1000);
    return;
}
animationDecorations(decorations);


const card = document.getElementById('cardServices');
const seo = document.getElementById('seo');

window.addEventListener('scroll', function() {
    const cardPosition = card.getBoundingClientRect();
    const seoPosition = card.getBoundingClientRect();
   
    if (cardPosition.top <= window.innerHeight) {
        card.classList.add('animationCard');
    }

    if (seoPosition.top <= window.innerHeight) {
        seo.classList.add('animationSeo');
    }
});