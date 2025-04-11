const burger = document.querySelector(".burger-menu");
const adaptive = document.querySelector(".adaptive");

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    adaptive.classList.toggle('active');

    // if (adaptive.classList.contains('active')) {
    //     document.body.style.overflow = 'hidden';
    // } else {
    //     document.body.style.overflow = 'visible';
    // }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.adaptive') && !e.target.closest('.burger-menu')) {
        burger.classList.remove('active');
        adaptive.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
});

document.querySelectorAll('.close-menu').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        adaptive.classList.remove('active');
        document.body.style.overflow = 'visible';
    });
});