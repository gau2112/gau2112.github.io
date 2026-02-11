// Dynamic Projects Data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Real-time Chat Application",
        description: "WebSocket-based chat app with user authentication and message history",
        tags: ["Socket.io", "Express", "React"]
    },
    {
        title: "Task Management Dashboard",
        description: "Interactive dashboard with drag-and-drop functionality and real-time updates",
        tags: ["Vue.js", "Firebase", "Tailwind"]
    },
    {
        title: "AI Content Generator",
        description: "AI-powered content generation tool using GPT API integration",
        tags: ["Python", "OpenAI API", "Flask"]
    },
    {
        title: "Music Streaming Service",
        description: "Spotify-like music streaming platform with playlist management",
        tags: ["React", "AWS", "PostgreSQL"]
    },
    {
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard with multiple chart types and data analysis tools",
        tags: ["D3.js", "Node.js", "MySQL"]
    }
];

// Dynamic Skills Data
const skills = [
    { icon: "💻", title: "Frontend Development", description: "HTML, CSS, JavaScript, React, Vue.js, Angular" },
    { icon: "⚙️", title: "Backend Development", description: "Node.js, Python, Express, Django, REST APIs" },
    { icon: "🗄️", title: "Database", description: "MongoDB, PostgreSQL, MySQL, Firebase" },
    { icon: "☁️", title: "Cloud Services", description: "AWS, Google Cloud, Azure, Heroku" },
    { icon: "🎨", title: "Design", description: "UI/UX Design, Figma, Adobe XD, Responsive Design" },
    { icon: "🔧", title: "Tools & DevOps", description: "Git, Docker, CI/CD, Linux, VS Code" }
];

// Load Projects Dynamically
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div>
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load Skills Dynamically
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Form Submission Handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                message: this.querySelector('textarea').value
            };
            
            // Show success message
            alert(`Thank you for reaching out, ${data.name}! I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 30, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(102, 126, 234, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 15, 30, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Scroll Animation - Fade In Elements
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// Active Nav Link Highlighting
function setupActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--accent-color)';
            } else {
                link.style.color = 'var(--light-text)';
            }
        });
    });
}

// Particle Background Animation
function setupParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.5';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.003;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (particles.length < 50 && Math.random() > 0.98) {
            particles.push(new Particle());
        }

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();

            if (particle.opacity <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
    setupMobileMenu();
    setupContactForm();
    setupNavbarScroll();
    setupScrollAnimation();
    setupActiveNavLink();
    setupParticleBackground();
    
    console.log('✨ Welcome to Gau2112 Portfolio - All systems loaded!');
});

// API Endpoints (Mock endpoints for demonstration)
const API_ENDPOINTS = {
    getProjects: '/api/projects',
    getSkills: '/api/skills',
    sendMessage: '/api/contact',
    getStats: '/api/stats'
};

// Example API call function
async function fetchAPI(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: options.data ? JSON.stringify(options.data) : null
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusCode}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

// Service Worker Registration (for offline support)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}