// Tailwind script
function initializeTailwind() {
    document.documentElement.style.setProperty('--accent', '#22d3ee');
}

// Dark mode toggle
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    const iconDesktop = document.getElementById('darkIcon');
    const iconMobile = document.getElementById('darkIconMobile');
    
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        if (iconDesktop) {
            iconDesktop.classList.remove('fa-moon');
            iconDesktop.classList.add('fa-sun');
        }
        if (iconMobile) {
            iconMobile.classList.remove('fa-moon');
            iconMobile.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        if (iconDesktop) {
            iconDesktop.classList.remove('fa-sun');
            iconDesktop.classList.add('fa-moon');
        }
        if (iconMobile) {
            iconMobile.classList.remove('fa-sun');
            iconMobile.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const iconDesktop = document.getElementById('darkIcon');
    const iconMobile = document.getElementById('darkIconMobile');
    
    const isDark = savedTheme === 'dark';
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        if (iconDesktop) {
            iconDesktop.classList.remove('fa-moon');
            iconDesktop.classList.add('fa-sun');
        }
        if (iconMobile) {
            iconMobile.classList.remove('fa-moon');
            iconMobile.classList.add('fa-sun');
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (iconDesktop) {
            iconDesktop.classList.add('fa-moon');
            iconDesktop.classList.remove('fa-sun');
        }
        if (iconMobile) {
            iconMobile.classList.add('fa-moon');
            iconMobile.classList.remove('fa-sun');
        }
    }
}

// CV Theme Toggle: Mountain (cool dark) vs Traditional (light classic)
let currentTheme = 'mountain';

function toggleCVTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    const iconMobile = document.getElementById('themeIconMobile');
    const labelMobile = document.getElementById('themeLabelMobile');
    
    if (currentTheme === 'mountain') {
        // Switch to Traditional
        body.classList.remove('mountain');
        body.classList.add('traditional');
        currentTheme = 'traditional';
        
        if (icon) icon.classList.replace('fa-mountain', 'fa-file-lines');
        if (label) label.textContent = 'Mountain';
        if (iconMobile) iconMobile.classList.replace('fa-mountain', 'fa-file-lines');
        if (labelMobile) labelMobile.textContent = 'Switch to Mountain View';
        
        localStorage.setItem('cvTheme', 'traditional');
    } else {
        // Switch to Mountain
        body.classList.remove('traditional');
        body.classList.add('mountain');
        currentTheme = 'mountain';
        
        if (icon) icon.classList.replace('fa-file-lines', 'fa-mountain');
        if (label) label.textContent = 'Classic';
        if (iconMobile) iconMobile.classList.replace('fa-file-lines', 'fa-mountain');
        if (labelMobile) labelMobile.textContent = 'Switch to Classic View';
        
        localStorage.setItem('cvTheme', 'mountain');
    }
}

function loadCVTheme() {
    const saved = localStorage.getItem('cvTheme') || 'mountain';
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    const iconMobile = document.getElementById('themeIconMobile');
    const labelMobile = document.getElementById('themeLabelMobile');
    
    if (saved === 'traditional') {
        body.classList.remove('mountain');
        body.classList.add('traditional');
        currentTheme = 'traditional';
        
        if (icon) icon.classList.replace('fa-mountain', 'fa-file-lines');
        if (label) label.textContent = 'Mountain';
        if (iconMobile) iconMobile.classList.replace('fa-mountain', 'fa-file-lines');
        if (labelMobile) labelMobile.textContent = 'Switch to Mountain View';
    } else {
        body.classList.add('mountain');
        currentTheme = 'mountain';
        if (label) label.textContent = 'Classic';
        if (labelMobile) labelMobile.textContent = 'Switch to Classic View';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('hamburgerIcon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Animate skill bars on scroll
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
}

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// Project data
const projects = [
    {
        title: "Luka vs Toys",
        description: "A fun, interactive web app designed specifically for a 4-year-old child. Features a simple rock-paper-scissors game and quick, safe access to the child's favourite YouTube channels. Built with a clean, responsive, and child-friendly interface.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        live: "https://stocks84.github.io/Luka_vs_Toys/",
        github: "https://github.com/Stocks84/Luka_vs_Toys"
    },
    {
        title: "Sanja Savasana Retreat",
        description: "Elegant single-page website for a yoga retreat in Austria. My very first front-end project, focused on creating a peaceful, professional online presence with calming design aesthetics and clear information architecture.",
        tech: ["HTML5", "CSS3"],
        live: "https://stocks84.github.io/Sanja-Savasana-Retreat/",
        github: "https://github.com/Stocks84/Sanja-Savasana-Retreat"
    },
    {
        title: "Ski School Pro",
        description: "A full-stack web application that allows clients to browse available ski instructors and book private lessons. Includes user authentication, an admin dashboard for instructors, lesson management, and booking system. Built with a robust backend and clean frontend.",
        tech: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "MySQL", "Bootstrap", "jQuery"],
        live: "https://ski-school-pro-2-4db020aae0bc.herokuapp.com/",
        github: "https://github.com/Stocks84/Ski-School-Pro"
    },
    {
        title: "Old Fashion",
        description: "A full-stack social platform where users can create, share, and discover drinking games through a social media-style interface. Features user authentication, post creation, commenting system, and a clean, modern user experience.",
        tech: ["HTML5", "CSS3", "JavaScript", "React", "Python", "Django REST Framework", "MySQL", "Bootstrap"],
        live: "#",
        github: "https://github.com/Stocks84/Old-Fashion"
    }
];

function showProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
    // Tech tags
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techContainer.appendChild(span);
    });
    
    // Links
    const liveLink = document.getElementById('modalLiveLink');
    const githubLink = document.getElementById('modalGithubLink');
    
    if (project.live && project.live !== '#') {
        liveLink.href = project.live;
        liveLink.style.display = 'flex';
    } else {
        liveLink.style.display = 'none';
    }
    
    githubLink.href = project.github;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function hideProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

// Print / Save as PDF - works reliably on both desktop and mobile
function downloadPDF() {
    const btns = document.querySelectorAll('button[onclick*="downloadPDF"]');
    const originalTexts = [];
    btns.forEach((btn, i) => {
        originalTexts[i] = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Preparing...`;
    });

    const wasMountain = document.body.classList.contains('mountain');

    // Switch to clean traditional layout
    document.body.classList.remove('mountain');
    document.body.classList.add('traditional');

    // Hide nav for clean print
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';

    // Small delay so layout settles (important on mobile)
    setTimeout(() => {
        // Try to trigger print dialog
        try {
            window.print();
        } catch (e) {
            console.log('Print dialog not triggered automatically');
        }

        // Show helpful message for mobile users (where window.print() often does nothing)
        const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
        if (isMobile) {
            setTimeout(() => {
                const msg = document.createElement('div');
                msg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#0f172a;color:#e2e8f0;padding:16px 20px;border-radius:16px;font-size:13px;max-width:88%;text-align:center;z-index:99999;box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.4);border:1px solid #334155';
                msg.innerHTML = `
                    <div style="margin-bottom:8px;font-weight:600;">Print dialog didn't appear?</div>
                    <div style="font-size:12px;line-height:1.4;">Tap your browser's <strong>Share</strong> button (usually bottom or top right) → choose <strong>Print</strong> or <strong>Save as PDF</strong></div>
                `;
                document.body.appendChild(msg);
                
                // Auto-remove after 12 seconds
                setTimeout(() => {
                    if (msg && msg.parentNode) msg.parentNode.removeChild(msg);
                }, 12000);
            }, 600);
        }

        // Restore everything after print dialog closes (or after delay on mobile)
        setTimeout(() => {
            if (nav) nav.style.display = '';
            document.body.classList.remove('traditional');
            if (wasMountain) document.body.classList.add('mountain');

            btns.forEach((btn, i) => {
                btn.disabled = false;
                btn.innerHTML = originalTexts[i];
            });
        }, isMobile ? 2500 : 600);
    }, 220);
}

// Keyboard support for modal
function initKeyboardControls() {
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            const modal = document.getElementById('projectModal');
            if (!modal.classList.contains('hidden')) {
                hideProjectModal();
            }
        }
    });
}

// Initialize everything
function init() {
    initializeTailwind();
    loadTheme();
    loadCVTheme();
    animateSkillBars();
    initScrollAnimations();
    initKeyboardControls();
    
    // Make sure dark mode icon is correct on load
    const icon = document.getElementById('darkIcon');
    if (document.documentElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Boot the app
window.onload = init;
