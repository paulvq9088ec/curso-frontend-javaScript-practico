const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isCarritoClosed = aside.classList.contains('inactive');
    if(!isCarritoClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isCarritoClosed = aside.classList.contains('inactive');

    if(!isCarritoClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if(!isDestopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}

