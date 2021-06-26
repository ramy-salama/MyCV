
let menuToggle = document.querySelector(".toggle");
let navigtion = document.querySelector(".navigation");
let src = document.querySelector(".src");
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    navigtion.classList.toggle('active')
    src.classList.toggle('active')
}