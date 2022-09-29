let navLinks = document.querySelectorAll('.nav-link')

// Navbar scroll effect
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY)
})

// active routes
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active')
    }
})

// Swiper Slides
let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
