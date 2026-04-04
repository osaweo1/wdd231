document.getElementById("timestamp").value = new Date().toISOString()

// modals
const links = document.querySelectorAll("[data-modal]")
const modals = document.querySelectorAll(".modal")
const closeBtns = document.querySelectorAll(".close")

links.forEach(link=>{
link.addEventListener("click",(e)=>{
e.preventDefault()
const dt=document.getElementById(link.dataset.modal)
dt.classList.add("active")
})
})

closeBtns.forEach(btn=>{
btn.addEventListener("click",()=>{
btn.parentElement.classList.remove("active")
})
})
