import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

let currentPage = 0;

homePage.load();

let orderButton = document.querySelector(".home button");
orderButton.addEventListener("click",() => {
    container.innerHTML = "";
    menuPage.load();
    navButtons[currentPage].style.color = "#a8a29e"
    navButtons[currentPage].style.textDecoration = "none";
    currentPage = 1;
});

const navButtons = [
    document.querySelector("#home-btn"),
    document.querySelector("#menu-btn"),
    document.querySelector("#contact-btn"),
];

let container = document.querySelector("#content");

navButtons[0].addEventListener("click",() => {
    if(currentPage!=0){
        container.innerHTML = "";
        homePage.load();
        navButtons[currentPage].style.color = "#a8a29e"
        navButtons[currentPage].style.textDecoration = "none";
        orderButton = document.querySelector(".home button");
        orderButton.addEventListener("click",() => {
            container.innerHTML = "";
            menuPage.load();
            navButtons[currentPage].style.color = "#a8a29e"
            navButtons[currentPage].style.textDecoration = "none";
            currentPage = 1;
        });
        currentPage = 0;
    }
});

navButtons[1].addEventListener("click",() => {
    if(currentPage!=1){
        container.innerHTML = "";
        menuPage.load();
        navButtons[currentPage].style.color = "#a8a29e"
        navButtons[currentPage].style.textDecoration = "none";
        currentPage = 1;
    }
});

navButtons[2].addEventListener("click",() => {
    if(currentPage!=2){
        container.innerHTML = "";
        contactPage.load()
        navButtons[currentPage].style.color = "#a8a29e"
        navButtons[currentPage].style.textDecoration = "none";
        currentPage = 2;
    }
});
