//select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of Menu
let showMenu = false;

const toggleMenu = () =>{
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //reset menu state
    showMenu = true;
  }else{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //reset menu state
    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
            .register('cached_assets.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`An Error Occurred: ${err}`));
  })
}