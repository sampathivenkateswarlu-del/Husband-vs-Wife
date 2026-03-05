const stories = [
    {
        title: "The Great Laundry Mix-Up",
        content: "My husband decided to 'help' with laundry. He mixed all the colors together. Now our whites are rainbow-colored! I laughed so hard I forgot to be mad."
    },
    {
        title: "Cooking Disaster",
        content: "I tried to surprise my wife with dinner. I burned the pasta and set off the smoke alarm. We ordered pizza instead and called it 'romantic'."
    },
    {
        title: "The Lost Remote",
        content: "My husband spent 20 minutes looking for the TV remote. It was in his hand the whole time. He blamed it on 'selective blindness'."
    },
    {
        title: "Dance Moves Gone Wrong",
        content: "We were at a wedding and my husband tried to dance. Let's just say the dance floor cleared. He now calls it his 'signature move'."
    },
    {
        title: "Shopping Cart Chaos",
        content: "At the grocery store, my wife pushed the cart while I walked beside it. I kept bumping into displays. She said, 'Honey, you're supposed to push it.'"
    },
    {
        title: "The Anniversary Forget",
        content: "He forgot our anniversary. But he made up for it by remembering every single detail from our first date. Points for effort!"
    },
    {
        title: "WiFi Woes",
        content: "The WiFi went down during a movie night. My husband tried to fix it by unplugging and replugging everything. Including the fridge. 'Just in case,' he said."
    },
    {
        title: "Morning Routine Madness",
        content: "I woke up to find my husband brushing his teeth with my face wash. He said it smelled 'minty fresh.' Now we label everything."
    },
    {
        title: "The Pet Name Mix-Up",
        content: "He called our dog by my name and me by the dog's name. For a week. The dog started responding to 'Sweetie.'"
    },
    {
        title: "Vacation Packing Fiasco",
        content: "He packed 5 pairs of shoes for a 3-day trip. I packed one dress. Guess who had blisters and who was comfortable?"
    },
    {
        title: "The Surprise Party Flop",
        content: "I planned a surprise party for him. He walked in early and saw everything. He pretended to be surprised anyway. Best actor award goes to..."
    },
    {
        title: "Cooking Competition",
        content: "We had a 'who can cook better' contest. His dish was edible. Mine was delicious. He declared himself the winner for 'creativity.'"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stories');
    const searchInput = document.getElementById('story-search');
    let currentStories = [...stories];

    function renderStories(storiesToRender) {
        container.innerHTML = '';
        storiesToRender.forEach((story, index) => {
            const div = document.createElement('div');
            div.className = 'story glass';
            div.innerHTML = `
                <h3>${story.title}</h3>
                <p>${story.content}</p>
                <button class="like-btn btn" data-index="${stories.indexOf(story)}">👍 Like (${Math.floor(Math.random() * 50) + 1})</button>
            `;
            container.appendChild(div);
        });
    }

    renderStories(currentStories);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = stories.filter(story => 
            story.title.toLowerCase().includes(query) || story.content.toLowerCase().includes(query)
        );
        renderStories(filtered);
    });
});

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('like-btn')) {
            const index = parseInt(e.target.dataset.index);
            likeStory(index, e.target);
        }
    });

    function likeStory(index, btn) {
        const current = parseInt(btn.textContent.match(/\d+/)[0]);
        btn.textContent = `👍 Like (${current + 1})`;
        btn.style.background = 'var(--accent)';
    }