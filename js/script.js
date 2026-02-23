// Main JavaScript file
const MESSAGES = [
    "🚀 Welcome to your Dockerized Fedora Web Application!",
    "⚡ This setup combines Fedora's stability with Docker's flexibility",
    "🔧 Running on your Acer desktop with Cinnamon DE",
    "🐳 Docker containers provide consistent environments across systems",
    "💡 Try adding more services with docker-compose.yml",
    "🔒 Security through isolation is Docker's superpower",
    "🌐 This could easily be deployed to cloud with minimal changes",
    "🎯 Perfect for development, testing, and production workflows"
];

document.addEventListener('DOMContentLoaded', function() {
    loadMessage();

    const newMessageBtn = document.getElementById('new-message');
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', loadMessage);
    }

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    createParticles();
});

function loadMessage() {
    const container = document.getElementById('message-container');
    if (!container) return;

    const randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    container.innerHTML = '';
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `<p>${randomMessage}</p>`;
    container.appendChild(messageDiv);
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(0, 255, 255, 0.4);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: pulse ${2 + Math.random() * 3}s infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}
