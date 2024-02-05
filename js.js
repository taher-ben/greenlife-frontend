let menu = document.getElementById('mega-menu');
let mage = document.getElementById('gallery');
mage.addEventListener('click', function() {
    if (menu.style.opacity === '0' || !menu.style.opacity) {
        menu.style.zIndex = '100';
        menu.style.opacity = 1;
    } else {
        menu.style.zIndex = '-1';
        menu.style.opacity = 0;
    }
});
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && event.target !== mage) {
        menu.style.zIndex = '-1';
        menu.style.opacity = 0;
    }
});


let menu_h = document.getElementById('mega');
let mage_h = document.getElementById('about');
mage_h.addEventListener('click', function() {
    if (menu_h.style.opacity === '0' || !menu_h.style.opacity) {
        menu_h.style.zIndex = '100';
        menu_h.style.opacity = 1;
    } else {
        menu_h.style.zIndex = '-1';
        menu_h.style.opacity = 0;
    }
});
document.addEventListener('click', function(event) {
    if (!menu_h.contains(event.target) && event.target !== mage_h) {
        menu_h.style.zIndex = '-1';
        menu_h.style.opacity = 0;
    }
});