/* Menu show */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Highlight //

const materialCards = document.getElementsByClassName('material__card');

for (let i = 0; i < materialCards.length; i++) {
    materialCards[i].addEventListener('mouseover', () => {
        materialCards[i].classList.add('highlight');
        const button = document.createElement('button');
        button.className = 'highlight-button';
        button.textContent = '+';
        materialCards[i].appendChild(button);
    });

    materialCards[i].addEventListener('mouseout', () => {
        materialCards[i].classList.remove('highlight');
        const button = materialCards[i].querySelector('.highlight-button');
        if (button) {
            materialCards[i].removeChild(button);
        }
    });
}


// Resizing and adjusment of nav
function handleNavClasses() {
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 1100) {
        navMenu.classList.add('nav-pc');
        navMenu.classList.remove('nav-mobile');
        removeElementsByClass('nav__close');
        removeElementsByClass('nav-toggler');
    } else {
        navMenu.classList.add('nav-mobile');
        navMenu.classList.remove('nav-pc');
    }
}

// Event listener for window resize
window.addEventListener('resize', handleNavClasses);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleNavClasses);
