//Nav animation
const nav = document.querySelector('.header--nav');
const header = document.querySelector('header');

const fixNav = () => {
    if(window.scrollY >= header.offsetHeight - 75){
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixNav);

//Burger menu
const burgerBtn = document.querySelector('.menu--btn');
const menu = document.querySelector('#menu');

const menuAdd = () => {
    if(menu.classList.value == 'show'){
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}

burgerBtn.addEventListener('click', menuAdd);

//Sliders
const sliders = document.querySelectorAll('.sliders');
const slidersText = document.querySelectorAll('.header--text')
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
let i = 0;
const slideShow = () => {
    const moveSlider = () =>{
        x = setInterval(() => {
            sliders[i].classList.add('hide--sld');
            if(i < sliders.length - 1){
                i++;
            } else {
                i = 0;
            }
            sliders.forEach( slide => slide.classList.remove('active--sld'));
            setTimeout(() => sliders.forEach( slide => slide.classList.remove('hide--sld')), 1000);
            sliders[i].classList.add('active--sld');}, 14000);
    }
    moveSlider();

    const nextSlide = () => {
        clearInterval(x);
        sliders[i].classList.add('hide--sld');
        i++;
        if(i >= sliders.length) {
            i = 0;
        }
        sliders.forEach( slide => slide.classList.remove('active--sld'));
        setTimeout(() => sliders.forEach( slide => slide.classList.remove('hide--sld')), 1000);
        sliders[i].classList.add('active--sld');
        moveSlider();
    }
    
    const prevSlide = () => {
        clearInterval(x);
        sliders[i].classList.add('hide--sld');
        i--;
        if(i < 0) {
            i = sliders.length - 1;
        }
        sliders.forEach( slide => slide.classList.remove('active--sld'));
        setTimeout(() => sliders.forEach( slide => slide.classList.remove('hide--sld')), 1000);
        sliders[i].classList.add('active--sld');
        moveSlider();
    }

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
}
slideShow();
//Section Projects

const cards = document.querySelectorAll('.project');
const btnProjects = document.querySelector('.btn--project');

const show = () => {
    for(let x = 8; x < cards.length; x++){
        cards[x].classList.add('no-display'); 
    }
};
show();

const noDisplay = document.querySelectorAll('.no-display');
const presButton = () => {
    btnProjects.style.display = 'none';
    for(let x = 0; x < noDisplay.length; x++){
        setTimeout(() => {noDisplay[x].classList.replace('no-display', 'display')}, 300 * x);
    }
};
btnProjects.addEventListener('click', presButton);


