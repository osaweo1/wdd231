
const repoContainer = document.getElementById("repo-container");

fetch("https://api.github.com/users/osaweo1/repos")
    .then(response => response.json())
    .then(data => {

        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(6, 14).forEach(repo => {

            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");

            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">
                    View Repository
                </a>
            `;

            repoContainer.appendChild(repoCard);
        });

    })
    .catch(error => {
        repoContainer.innerHTML =
        "<p>Unable to load repositories.</p>";
        console.error(error);
    });