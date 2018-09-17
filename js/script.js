
const iconOpenClose = document.querySelector(".menu-icon__open-close");
const menuCloseMobile = document.querySelector(".menu--close-mobile");
const menuList = document.querySelector('.menu');
const subMenuNav = document.querySelector('.sub-menu ');

let hidenMenu = () => {
  menuList.classList.remove('fadeInDown');
  menuList.classList.toggle('fadeOutUp');
  iconOpenClose.classList.remove('menu-icon__line--move');
}

let openMenu = () => {
  menuCloseMobile.classList.remove('menu--close-mobile')
  menuList.classList.remove('fadeOutUp');
  iconOpenClose.classList.toggle('menu-icon__line--move');
  menuList.classList.toggle('fadeInDown');
}

let clickMenuOut = function(e) {
  // if one of these conditions take false function does not running
  if ( e.target.parentNode.parentNode.parentNode != menuList && e.target.parentNode.parentNode != menuList && e.target.parentNode.parentNode != subMenuNav ) {
    if (iconOpenClose.classList.contains('menu-icon__line--move') == true) {
      hidenMenu();
    }
  }
};

window.addEventListener('click', clickMenuOut);

iconOpenClose.addEventListener('click', function(e) {
  e.stopPropagation();
  if (this.classList.contains('menu-icon__line--move') == false) {
    openMenu();
  } else {
    this.classList.remove('menu-icon__line--move');
    hidenMenu();
    
  }
});
