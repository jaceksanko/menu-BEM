const iconOpenClose = document.getElementById('js-menu-icon__open-close');
const menuList = document.querySelectorAll('nav ul');
const menuOpenClose = document.querySelector('nav');
//const body = document.querySelector('.header');
const subMenuNav = document.querySelector('.menu__nav__sub-menu ');

let hidenMenu = () => {
  menuList[0].classList.remove('fadeInDown');
  menuList[1].classList.remove('fadeInDown');
  menuList[0].classList.toggle('fadeOutUp');
  menuList[1].classList.toggle('fadeOutUp');
  setTimeout(() => {
    menuOpenClose.classList.add('js-menu');
    menuList[0].classList.remove('fadeOutUp');
    menuList[1].classList.remove('fadeOutUp');
  }, 500) 
}

let clickMenuOut = function(e) {
  // if one of these conditions take false function does not running
  if ( e.target.parentNode.parentNode.parentNode != menuOpenClose && e.target.parentNode.parentNode != menuOpenClose && e.target.parentNode.parentNode != subMenuNav ) {
    if (iconOpenClose.classList.contains('menu-icon__line--move') == true) {
      iconOpenClose.classList.remove('menu-icon__line--move');
      hidenMenu();
    }
  }
};

window.addEventListener('click', clickMenuOut);

iconOpenClose.addEventListener('click', function(e) {
  e.stopPropagation();
  if (this.classList.contains('menu-icon__line--move') == false) {
    menuList[0].classList.remove('fadeOutUp');
    menuList[1].classList.remove('fadeOutUp');
    this.classList.toggle('menu-icon__line--move');
    menuList[0].classList.toggle('fadeInDown');
    menuList[1].classList.toggle('fadeInDown');
    menuOpenClose.classList.toggle('js-menu');
  } else {
    this.classList.remove('menu-icon__line--move');
    hidenMenu();
    
  }
});
