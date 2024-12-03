// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// EmailJS Form Submission
emailjs.init("user_XXXXXXXXXXXXXX");  // Replace with your own EmailJS user ID

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_xxxxxxx', 'template_xxxxxxx', this)
        .then(function(response) {
            alert('Message sent successfully!', response);
        }, function(error) {
            alert('Error sending message: ' + error);
        });
});

// Particle.js initialization (if using particles)
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ff4500" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ff4500", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 1 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
