function showcanvas() {
    var canvas = document.querySelector('.offcanvas-slider');
    canvas.classList.add('offcanvas-slider-show');
    var CanHea1 = document.querySelector('.canvas-heading-1');
    CanHea1.classList.add('slide-up');
    var CanHea2 = document.querySelector('.canvas-heading-2');
    CanHea2.classList.add('slide-up');
    var CanHea3 = document.querySelector('.canvas-heading-3');
    CanHea3.classList.add('slide-up');
    var CanFoo = document.querySelector('.canvas-footer');
    CanFoo.classList.add('slide-up');
    var CP1 = document.querySelector('.CanPra-1');
    CP1.classList.add('slide-up');
    var CP2 = document.querySelector('.CanPra-2');
    CP2.classList.add('slide-up');
    var CP3 = document.querySelector('.CanPra-3');
    CP3.classList.add('slide-up');
}
function hidecanvas() {
    var canvas = document.querySelector('.offcanvas-slider');
    canvas.classList.remove('offcanvas-slider-show');
    var CanHea1 = document.querySelector('.canvas-heading-1');
    CanHea1.classList.remove('slide-up');
    var CanHea2 = document.querySelector('.canvas-heading-2');
    CanHea2.classList.remove('slide-up');
    var CanHea3 = document.querySelector('.canvas-heading-3');
    CanHea3.classList.remove('slide-up');
    var CP1 = document.querySelector('.CanPra-1');
    CP1.classList.remove('slide-up');
    var CP2 = document.querySelector('.CanPra-2');
    CP2.classList.remove('slide-up');
    var CP3 = document.querySelector('.CanPra-3');
    CP3.classList.remove('slide-up');
    var CanFoo = document.querySelector('.canvas-footer');
    CanFoo.classList.remove('slide-up');
    var canvas = document.querySelector('.offcanvas-slider');
    canvas.classList.remove('offcanvas-slider-show');
}
function accordion1() {
    var downArrow2 = document.querySelector('.down-arrow-2');
    downArrow2.classList.remove('up-arrow');
    var toggledropdown2 = document.querySelector('.canvas-drop-links-2');
    toggledropdown2.classList.remove('open-dropdown-2');
    var downArrow3 = document.querySelector('.down-arrow-3');
    downArrow3.classList.remove('up-arrow');
    var toggledropdown3 = document.querySelector('.canvas-drop-links-3');
    toggledropdown3.classList.remove('open-dropdown-1');
    var downArrow = document.querySelector('.down-arrow-1');
    downArrow.classList.toggle('up-arrow');
    var toggledropdown = document.querySelector('.canvas-drop-links-1');
    toggledropdown.classList.toggle('open-dropdown-1');
}
function accordion2() {
    var downArrow2 = document.querySelector('.down-arrow-1');
    downArrow2.classList.remove('up-arrow');
    var toggledropdown2 = document.querySelector('.canvas-drop-links-1');
    toggledropdown2.classList.remove('open-dropdown-1');
    var downArrow3 = document.querySelector('.down-arrow-3');
    downArrow3.classList.remove('up-arrow');
    var toggledropdown3 = document.querySelector('.canvas-drop-links-3');
    toggledropdown3.classList.remove('open-dropdown-1');
    var downArrow = document.querySelector('.down-arrow-2');
    downArrow.classList.toggle('up-arrow');
    var toggledropdown = document.querySelector('.canvas-drop-links-2');
    toggledropdown.classList.toggle('open-dropdown-2');
}
function accordion3() {
    var downArrow2 = document.querySelector('.down-arrow-2');
    downArrow2.classList.remove('up-arrow');
    var toggledropdown2 = document.querySelector('.canvas-drop-links-2');
    toggledropdown2.classList.remove('open-dropdown-2');
    var downArrow3 = document.querySelector('.down-arrow-1');
    downArrow3.classList.remove('up-arrow');
    var toggledropdown3 = document.querySelector('.canvas-drop-links-1');
    toggledropdown3.classList.remove('open-dropdown-1');
    var downArrow = document.querySelector('.down-arrow-3');
    downArrow.classList.toggle('up-arrow');
    var toggledropdown = document.querySelector('.canvas-drop-links-3');
    toggledropdown.classList.toggle('open-dropdown-1');
}

