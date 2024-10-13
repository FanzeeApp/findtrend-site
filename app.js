function toggleMenu() {
    const items = document.querySelector('.items');
    const btns = document.querySelector('.btns');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');
    

    items.classList.toggle('active');
    btns.classList.toggle('active');
    openIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
}


window.onscroll = function() {
    shrinkNavbar();
};

function shrinkNavbar() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink'); 
    } else {
        header.classList.remove('shrink');
    }
}