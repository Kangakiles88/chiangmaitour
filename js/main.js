'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});

// Anchor

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open')
    scrollIntoView(link);
})

// navbar Toggle button 

const toggleMenu = document.querySelector('.navbar__toggle-btn');

toggleMenu.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');    
});


//Handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})


// Make home slowly fade to transparent as the window scorlls down

const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight   
})

// show "arrow up" button when scrolling down

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible');
    }
})

// Handle click on the "arrow up" button scorlling up to home

arrowUp.addEventListener('click',() => {
    scrollIntoView('#home');
});

// Projects

const galleryBtnContainer = document.querySelector('.gallery__categories');
const projectContainer = document.querySelector('.gallery__projects');
const projects = document.querySelectorAll('.project');

galleryBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection form the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    
    setTimeout(() => {
        projectContainer.classList.remove('anim-out');
    },300);

    projects.forEach((project) => {
        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    })
    
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// //popup
// function openPopup() {
// 	var img = document.querySelector("img");
// 	var popup = document.createElement("div");
// 	popup.classList.add("popup");
// 	popup.innerHTML = '<img src="' + img.src + '">';

// 	popup.onclick = function() {
// 		popup.classList.remove("active");
// 	};

// 	document.body.appendChild(popup);

// 	setTimeout(function() {
// 		popup.classList.add("active");
// 	}, 10);
// }