
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form data as an object
    let formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value
    };

    // Send form data in JSON format
    fetch("https://formspree.io/f/mkgobrnd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Display success message
            document.getElementById("responseMessage").innerText = "Message Sent Successfully!";
            document.getElementById("responseMessage").style.color = "green"; // Optional: styling the message
            document.getElementById("contactForm").reset(); // Reset the form after submission
        } else {
            // Handle error if the response is not OK
            document.getElementById("responseMessage").innerText = "Error Sending Message!";
            document.getElementById("responseMessage").style.color = "red";
        }
    })
    .catch(error => {
        // Display error if something goes wrong
        document.getElementById("responseMessage").innerText = "Error Sending Message!";
        document.getElementById("responseMessage").style.color = "red";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    
    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close menu when clicking a navbar item
    document.querySelectorAll(".navbar a").forEach(item => {
        item.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
});

