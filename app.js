let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainBehind = document.getElementById('mountain_behind');
let mountainFront = document.getElementById('mountain_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');


const paralloxEffect = () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainBehind.style.top = value * 0.5 + 'px';
    mountainFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
};

window.addEventListener('scroll', paralloxEffect);
