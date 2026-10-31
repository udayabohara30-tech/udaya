function showActivities(){
    document.getElementById("activities").style.display ="block";
}
function hideActivities(){
    document.getElementById("activities").style.display ="none";
}
let menu =document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
 menu.onclick =() => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
 }
 window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
 }
    const typed = new Typed('.multi-text', {
      strings: ['Computer Instructor,', 'Web Developer','& Programmer.'],
      typeSpeed: 80,
      backSpeed: 80,
      backdDelay: 1200,
      loop:true,
    });
    

const form = document.querySelector("form");

// Create notification automatically
const notification = document.createElement("div");
notification.className = "notification";
document.body.appendChild(notification);

let timer;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearTimeout(timer);

    const inputs = form.querySelectorAll("input");
    const message = form.querySelector("textarea");

    // Check all input fields
    let empty = false;

    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            empty = true;
        }
    });

    if (!message || message.value.trim() === "") {
        empty = true;
    }

    if (empty) {
        notification.textContent =
            "⚠️ Please fill in all fields first!";
        notification.style.background = "#dc3545";
    } else {
        notification.textContent =
            "✅ Message sent successfully!";
        notification.style.background = "#008577";

        form.reset();
    }

    notification.classList.add("show");

    timer = setTimeout(function () {
        notification.classList.remove("show");
    }, 3000);
});

