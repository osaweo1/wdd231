const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter only Gold & Silver members
    let qualified = data.filter(member =>
      member.level === "Gold" || member.level === "Silver"
    );

    // Shuffle randomly
    qualified.sort(() => 0.5 - Math.random());

    // Pick 3 members
    let selected = qualified.slice(0, 3);

    // Display using map (cleaner)
    spotlightContainer.innerHTML = selected.map(member => `
      <div class="card">
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        
      </div>
    `).join("");

  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

loadSpotlights();
