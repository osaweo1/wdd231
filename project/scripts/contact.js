const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        document.getElementById("formMessage").textContent =
        "Please fill all fields.";
    } else {
        form.reset()
        document.getElementById("formMessage").textContent =
        "Message submitted successfully!";
    }
});