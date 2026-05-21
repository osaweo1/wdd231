// navigation for small screen 


const navMenu=document.querySelector("nav")
const open=document.querySelector(".menu-image")
const close=document.querySelector(".close")



open.addEventListener("click",()=>{
    navMenu.classList.add("open")
    close.style.display="block"
    open.style.display="none"

})

close.addEventListener("click",()=>{
    navMenu.classList.remove("open")
    close.style.display="none"
    open.style.display="block"
})