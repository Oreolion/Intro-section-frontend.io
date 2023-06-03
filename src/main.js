let menuBtn = document.querySelector("#menubar");
let mobileMenu = document.querySelector(".mobile-menu")





menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-close")
    mobileMenu.classList.toggle("active")
}
window.onscroll = () => {
    menuBtn.classList.remove("fa-close")
    mobileMenu.classList.remove("active")
}