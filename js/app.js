let hamburger = document.querySelector('.hamburger');
let product = document.querySelector('.product');
let company = document.querySelector('.company');
let connect = document.querySelector('.connect');

product.addEventListener('click', showSubmenuProduct);
company.addEventListener('click', showSubmenuCompany);
connect.addEventListener('click', showSubmenuConnect);
hamburger.addEventListener('click', openMain);

function openMain(){
    let iconMenu = document.querySelector('.icon-menu')
    let main = document.querySelector('.main');
    let body = document.querySelector('body');


    iconMenu.classList.toggle('fa-times')

    body.classList.toggle('hiden')

    if(main.classList.contains('hiden-main')){
        main.classList.remove('hiden-main')
        main.classList.add('show-main')
    }else if(main.classList.contains('show-main')){
        main.classList.remove('show-main');
        main.classList.add('hiden-main')
    }
}

function showSubmenuProduct(){
    let submenu = document.querySelector('.ulProduct');
    let arrow = document.querySelector('.arrow');
    let linkProduct = document.querySelector('.product')

   
    submenu.classList.toggle('show-submenu')
    arrow.classList.toggle('submenu')
    linkProduct.classList.toggle('color');
    product.classList.toggle('color-desktop')
}

function showSubmenuCompany(){
    let submenu = document.querySelector('.ulCompany');
    let arrow = document.querySelectorAll('.arrow')[1];
    let linkCompany = document.querySelector('.company')

    arrow.classList.toggle('submenu')
    submenu.classList.toggle('show-submenu')
    linkCompany.classList.toggle('color');
    company.classList.toggle('color-desktop')
}

function showSubmenuConnect(){
    let submenu = document.querySelector('.ulConnect');
    let arrow = document.querySelectorAll('.arrow')[2];
    let linkConnect = document.querySelector('.connect')


    arrow.classList.toggle('submenu')
    submenu.classList.toggle('show-submenu')
    linkConnect.classList.toggle('color');
    connect.classList.toggle('color-desktop')
    
 
    
}