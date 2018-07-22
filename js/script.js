const iconsMenu = document.getElementById('menu-icon');
const iconOpenClose = document.getElementById('js-menu-icon-open-close');
const menuList = document.querySelectorAll('nav ul');
const menuOpenClose = document.querySelector('nav');

iconOpenClose.addEventListener('click', function() {
    if (this.classList.contains('line-menu-icon-move') == false) {
        this.classList.toggle('line-menu-icon-move');
        menuOpenClose.classList.toggle('menu-open-close');
    }
    else {
        this.classList.remove('line-menu-icon-move');
        menuOpenClose.classList.toggle('menu-open-close'); 
    }
});
