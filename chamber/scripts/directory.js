const searchInput=document.querySelector("#searchInput")
const searchCategory=document.querySelector("#categoryFilter")
const memberSection=document.querySelector("#members")

const url="data/members.json"
console.log(url)

let members=[]


const getMembers=async()=>{
    const response=await fetch(url)
    members=await response.json()
    displayMembers(members)
}

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

