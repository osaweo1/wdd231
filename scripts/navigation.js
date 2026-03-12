const openButton=document.querySelector(".burger")
const nav=document.querySelector("nav")
const closeButton=document.querySelector(".burger-close")


openButton.addEventListener('click',()=>{
    nav.classList.add("open")
    openButton.style.display="none"
    closeButton.style.display="block"
})

closeButton.addEventListener("click",()=>{
    nav.classList.remove("open")
    openButton.style.display="block"
    closeButton.style.display="none"
})