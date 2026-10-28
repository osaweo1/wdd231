const searchInput=document.querySelector("#searchInput")
const searchCategory=document.querySelector("#categoryFilter")
const memberSection=document.querySelector("#members")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const url="data/members.json"


let members=[]


const getMembers=async()=>{
    const response=await fetch(url)
   
    members=await response.json()
  
    displayMembers(members)
}
gridbutton.addEventListener("click", () => {
    memberSection.classList.add("grid");
    gridbutton.classList.add("active")
    memberSection.classList.remove("list");
    listbutton.classList.remove("active");
});

// Handle List view button click
listbutton.addEventListener("click", () => {
    memberSection.classList.add("list");
    listbutton.classList.add("active");
    memberSection.classList.remove("grid");
    gridbutton.classList.remove("active");
});
const displayMembers=async(membersList)=>{
    memberSection.innerHTML=""
    membersList.forEach(member=>{

        const card = document.createElement("section")
        card.classList.add("card")

        card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <div class="member-info">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone:${member.phone}</p>
            <p><strong>Category:</strong> ${member.category}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
        
        `

        memberSection.appendChild(card)
    })

}

const filtereMembers=async()=>{
    const keyword=searchInput.value.toLowerCase()
    const categoryKeyword=searchCategory.value

    const filtered= await members.filter(member=>{
        const matchedKeyWord=member.name.toLowerCase().includes(keyword)||
            member.category.toLowerCase().includes(keyword)||
            member.address.toLowerCase().includes(keyword)

        const matchedCategory= categoryKeyword==="all"||member.category===categoryKeyword

        return matchedKeyWord && matchedCategory
    })
    displayMembers(filtered)
}

searchInput.addEventListener("keyup", filtereMembers)
searchCategory.addEventListener("change",filtereMembers)
getMembers()

