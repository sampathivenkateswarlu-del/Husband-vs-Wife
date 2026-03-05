document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Compatibility calculator
    const form = document.getElementById('compat-form');
    const result = document.getElementById('compat-result');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name1 = document.getElementById('name1').value;
            const name2 = document.getElementById('name2').value;
            const compat = calculateCompatibility(name1, name2);
            result.textContent = `Your compatibility is ${compat}%!`;
        });
    }

    function calculateCompatibility(n1, n2) {
        // Simple calculation based on names
        const sum = (n1 + n2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return (sum % 100) + 1;
    }

    // Leaderboard
    loadLeaderboard();
    function loadLeaderboard() {
        const list = document.getElementById('leaderboard-list');
        if (!list) return;
        const votes = JSON.parse(localStorage.getItem('pollVotes') || '{}');
        const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);
        sorted.slice(0, 5).forEach(([option, count]) => {
            const item = document.createElement('div');
            item.className = 'leader-item';
            item.textContent = `${option}: ${count} votes`;
            list.appendChild(item);
        });
    }
});