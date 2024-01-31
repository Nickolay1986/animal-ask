"use strict"
// window.onload = function() {
//   setTimeout(function() {
//     window.scrollTo(0, 0);
//   }, 100);
// };
// const links = document.querySelectorAll('a');
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('mobMenu').addEventListener('click', function () {
        document.querySelector('.head').classList.toggle('open');

        const nav = document.querySelector('.nav');
        const links = nav.querySelectorAll('li a');

        links.forEach(link => {
            link.addEventListener('click', function () {
            document.getElementById('mobMenu').click();
        })
        });

        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
})






