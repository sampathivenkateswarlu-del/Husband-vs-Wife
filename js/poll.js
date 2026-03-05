const pollOptions = ["Snores loudly", "Forgets anniversaries", "Dances badly", "Tells bad jokes"];

let selectedOption = null;

document.addEventListener('DOMContentLoaded', () => {
    loadPoll();
    document.getElementById('vote-btn').addEventListener('click', vote);
});

function loadPoll() {
    const optionsDiv = document.getElementById('options');
    pollOptions.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'poll-option';
        label.innerHTML = `<input type="radio" name="poll" value="${index}"> ${option}`;
        optionsDiv.appendChild(label);
        label.querySelector('input').addEventListener('change', () => selectedOption = index);
    });
}

function vote() {
    if (selectedOption === null) {
        alert('Please select an option!');
        return;
    }
    const votes = JSON.parse(localStorage.getItem('pollVotes') || '{}');
    const option = pollOptions[selectedOption];
    votes[option] = (votes[option] || 0) + 1;
    localStorage.setItem('pollVotes', JSON.stringify(votes));
    showResults(votes);
}

function showResults(votes) {
    document.getElementById('poll').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    const barsDiv = document.getElementById('result-bars');
    barsDiv.innerHTML = '';
    const total = Object.values(votes).reduce((a,b) => a+b, 0);
    pollOptions.forEach(option => {
        const count = votes[option] || 0;
        const percent = total ? (count / total * 100).toFixed(1) : 0;
        const bar = document.createElement('div');
        bar.className = 'result-item';
        bar.innerHTML = `<div class="result-text">${option}: ${count} votes (${percent}%)</div><div class="bar"><div class="fill" style="width: ${percent}%"></div></div>`;
        barsDiv.appendChild(bar);
    });
}