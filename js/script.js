let navlinks = document.querySelectorAll('.nav-link')

navlinks.forEach(item => {
    item.addEventListener('click', (e) => {
        item.classList.add('active')
    })
})

window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY)
})



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
