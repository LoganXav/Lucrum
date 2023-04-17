const modal = document.getElementById('modal') 
const closeIcon = document.getElementById('close-nav') 
const openIcon = document.querySelector('.hamburger-icon') 
const modalBg = document.querySelector('.modal-bg') 
const navMenu = document.querySelector('.nav-menu') 
const chevron1 = document.getElementById('chevron1')
const chevron2 = document.getElementById('chevron2')
const chevron2Close = document.getElementById('chevron2-close')

chevron1.addEventListener("click", (e) => {
    modal.classList.toggle("active")
})
chevron2.addEventListener("click", () => {
    modal.classList.add("active")
    chevron2Close.style.display = "block";
})
chevron2Close.addEventListener("click", () => {
    modal.classList.remove("active")
    chevron2Close.style.display = "none";
})
openIcon.addEventListener("click", () => {
    modalBg.classList.toggle("active")
    navMenu.classList.toggle("active")
})
closeIcon.addEventListener("click", () => {
    modalBg.classList.toggle("active")
    navMenu.classList.toggle("active")
})
