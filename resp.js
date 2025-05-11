burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

// Toggle navbar visibility on burger menu click
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navList = document.querySelector(".nav-list");
    const joinNowBtn = document.getElementById("joinNowBtn");
    const ctaButton = document.querySelector(".cta-button");

    // Toggle navigation on burger menu click
    burger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Example of button click interaction for Join Now
    joinNowBtn.addEventListener("click", function () {
        alert("Thank you for your interest! Visit our gym to start your journey!");
    });

    // Smooth scroll for "Join Now" button
    ctaButton.addEventListener("click", function () {
        document.querySelector(".features-section").scrollIntoView({ behavior: "smooth" });
    });
});
    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll(".feature-card, .owner-content").forEach((section) => {
        observer.observe(section);
    });

// Function to show blog details
function showBlogDetails(postId) {
    alert(`Loading more details for Blog Post ${postId}...`);
    // This function can be expanded to load detailed blog content
}



// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // Simulate a successful submission
    document.getElementById('response-message').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    document.getElementById('contact-form').reset();
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();


