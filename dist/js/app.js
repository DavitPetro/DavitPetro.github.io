/*
 * Author: Davit Petrosyan
 * Filename: app.js
 * Description: A script file for my website
 */

// DOM settings

const scrollButton = document.getElementById("up-arrow");
const formModal = new bootstrap.Modal(document.getElementById("contact-modal"));
const contactForm = document.getElementById("contact-form");
const content = document.getElementById("content");


// On-Scroll function that shows/hides the up scroll button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.opacity = 1;
    }
    else {
        scrollButton.style.opacity = 0;
    }
}

// Contact form submission handler
async function submitHandler(event) {
    event.preventDefault();
    formModal.toggle();
    var data = new FormData(event.target);
    var alertBtn = document.createElement("button");
    alertBtn.setAttribute("type", "button");
    alertBtn.setAttribute("class", "btn-close");
    alertBtn.setAttribute("data-bs-dismiss", "alert")
    fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        contactForm.reset()
        var succAlert = document.createElement("div");
        succAlert.setAttribute("class", "alert alert-success alert-dismissible fade show");
        succAlert.setAttribute("role", "alert");
        succAlert.innerHTML = "Thank you for your message!";
        succAlert.appendChild(alertBtn);
        content.appendChild(succAlert);
    }).catch(error => {
        var failAlert = document.createElement("div");
        failAlert.setAttribute("class", "alert alert-failure alert-dismissible fade show");
        failAlert.setAttribute("role", "alert");
        failAlert.innerHTML = "Whoops! Something Went Wrong";
        failAlert.appendChild(alertBtn);
        content.appendChild(failAlert);
    });
}

window.onload = function() {
    window.addEventListener("scroll", scrollFunction);

    contactForm.addEventListener("submit", submitHandler);
}