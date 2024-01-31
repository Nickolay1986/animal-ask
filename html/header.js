document.addEventListener('DOMContentLoaded', function () {
    
})



document.addEventListener('DOMContentLoaded', function () {
    const headDiv = document.createElement('div');
    headDiv.classList.add('head');

    const divLogoMobile = document.createElement('div');
    divLogoMobile.classList.add('divLogoMobile');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = '../img/logo.png';
    logoImg.alt = 'logo w100 h60';
    logoImg.width = '60';
    logoImg.height = '60';
    logo.appendChild(logoImg);

    divLogoMobile.appendChild(logo);
    headDiv.appendChild(divLogoMobile);

    const header = document.createElement('header');
    header.classList.add('header');

    const divLogo = document.createElement('div');
    divLogo.classList.add('divLogo');

    const aIndex = document.createElement('a');
    aIndex.href = '../index.html'
    const logo2 = document.createElement('div');
    logo2.classList.add('logo');
    const logoImg2 = document.createElement('img');
    logoImg2.src = '../img/logo.png';
    logoImg2.alt = 'logo w100 h60';
    logoImg2.width = '60';
    logoImg2.height = '60';
    logo2.appendChild(logoImg2);

    divLogo.appendChild(aIndex);
    aIndex.appendChild(logo2);
    header.appendChild(divLogo);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const section = document.createElement('div');
    section.classList.add('section');

    const categories = document.createElement('div');
    categories.classList.add('categories');

    const ul = document.createElement('ul');
    ul.classList.add('ul');

    const li1 = document.createElement('li');
    li1.classList.add('li');
    const a1 = document.createElement('a');
    a1.classList.add('a');
    a1.href = '../html/general.html';
    a1.textContent = 'О нас';
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    li2.classList.add('li');
    const a2 = document.createElement('a');
    a2.classList.add('a');
    a2.href = '../index.html';
    a2.textContent = 'Главная страница';
    li2.appendChild(a2);

    const li3 = document.createElement('li');
    li3.classList.add('li');
    const a3 = document.createElement('a');
    a3.classList.add('a');
    a3.href = '../html/management.html';
    a3.textContent = 'Руководство';
    li3.appendChild(a3);

    const li4 = document.createElement('li');
    li4.classList.add('li');
    const a4 = document.createElement('a');
    a4.classList.add('a');
    a4.href = '../html/entry.html';
    a4.textContent = 'Порядок вступления';
    li4.appendChild(a4);

    const li5 = document.createElement('li');
    li5.classList.add('li');
    const a5 = document.createElement('a');
    a5.classList.add('a');
    a5.href = '../html/charter.html';
    a5.textContent = 'Устав';
    li5.appendChild(a5);

    const li6 = document.createElement('li');
    li6.classList.add('li');
    const a6 = document.createElement('a');
    a6.classList.add('a');
    a6.href = '../html/branches.html';
    a6.textContent = 'Филиалы';
    li6.appendChild(a6);

    const li7 = document.createElement('li');
    li7.classList.add('li');
    const a7 = document.createElement('a');
    a7.classList.add('a');
    a7.href = '../html/contacts.html';
    a7.textContent = 'Контакты';
    li7.appendChild(a7);


    // Создайте и добавьте остальные элементы li и a

    ul.appendChild(li2);
    // ul.appendChild(li3);
    ul.appendChild(li4);
    // ul.appendChild(li5);
    // ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li1);


    categories.appendChild(ul);
    section.appendChild(categories);
    nav.appendChild(section);
    header.appendChild(nav);

    headDiv.appendChild(header);

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobileMenu');
    mobileMenu.id = 'mobMenu';

    const button = document.createElement('div');
    button.classList.add('button');

    

    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        button.appendChild(span);
    }

    mobileMenu.appendChild(button);
    headDiv.appendChild(mobileMenu);

    // document.body.appendChild(headDiv);
    const wrapperDiv = document.querySelector('.wrapper');
    wrapperDiv.insertBefore(headDiv, wrapperDiv.firstChild);
});