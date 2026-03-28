const slider=document.querySelector(".slider")


const address="data/events.json"



const loadEvent=async()=>{
    const response=await fetch(address)
    const data=await response.json()
   

    data.forEach((event,index)=>{
        const slide =document.createElement("div")
        slide.classList.add("slide")
        if(index===0){
            slide.classList.add("active")
        }
        slide.innerHTML = 
        `
            <img src="${event.image}" alt="${event.title}">
            <div class="overlay-slider">
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
            </div>
        `
              
        slider.appendChild(slide);
    })
    autoSlide()

}
let currentSlide = 0;
function autoSlide() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
}
loadEvent()