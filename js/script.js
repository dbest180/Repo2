// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Load messages on page load
    loadMessages();
    
    // Setup event listeners
    const newMessageBtn = document.getElementById('new-message');
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', loadMessages);
    }
    
    // Update year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Create particle background
    createParticles();
});

function loadMessages() {
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('message-container');
            if (container) {
                container.innerHTML = '';
                const randomMessage = data.message;
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message-card';
                messageDiv.innerHTML = `<p>${randomMessage}</p>`;
                container.appendChild(messageDiv);
            }
        })
        .catch(error => {
            console.error('Error loading messages:', error);
            const container = document.getElementById('message-container');
            if (container) {
                container.innerHTML = '<p>Unable to load messages</p>';
            }
        });
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}
