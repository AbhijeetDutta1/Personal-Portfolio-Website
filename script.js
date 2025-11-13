// Full interactive particle system with gradient background
function initFancyParticles(canvasId, baseColor = "rgba(74,144,226,0.5)", lineColor = "rgba(74,144,226,0.2)") {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const section = canvas.parentElement;
    
    let width = section.offsetWidth;
    let height = section.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 80;

    const mouse = { x: null, y: null, radius: 150 };

    // Track mouse
    section.addEventListener("mousemove", e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    section.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = Math.random() * 30 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            // Move particles
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary check
            if (this.x > width) { this.x = 0; this.baseX = 0; }
            if (this.x < 0) { this.x = width; this.baseX = width; }
            if (this.y > height) { this.y = 0; this.baseY = 0; }
            if (this.y < 0) { this.y = height; this.baseY = height; }

            // Mouse repulsion
            if (mouse.x != null && mouse.y != null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * this.density * 0.6;
                    this.y += Math.sin(angle) * force * this.density * 0.6;
                }
            }
        }

        draw() {
            ctx.fillStyle = `rgba(74,144,226,${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.strokeStyle = `rgba(74,144,226,${0.2 * (1 - dist / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x != null && mouse.y != null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    ctx.strokeStyle = `rgba(160,196,255,${0.3 * (1 - dist / mouse.radius)})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        // Draw a faint circle around cursor
        if (mouse.x != null && mouse.y != null) {
            ctx.fillStyle = "rgba(160,196,255,0.1)";
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "rgba(160,196,255,0.3)";
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
        width = section.offsetWidth;
        height = section.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    });
}

// Initialize all sections with interactive gradient particle backgrounds
initFancyParticles("particles-home");
initFancyParticles("projects-particles");
initFancyParticles("work-particles");
initFancyParticles("social-particles");
initFancyParticles("contact-particles");

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// Contact form demo
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}
