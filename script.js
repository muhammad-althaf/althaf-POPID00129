const toggleLogo = document.getElementById('openMenu');
const closeToggle= document.getElementById('closeMenu')
const menu = document.querySelector('.menu-window');
const body = document.querySelector('body');
const html = document.querySelector('html');

toggleLogo.addEventListener('click',function(){
    menu.classList.add('active');
    body.style.overflow='hidden';

})

closeToggle.addEventListener('click',function(){
    menu.classList.remove('active');
    body.style.overflow='auto';

})