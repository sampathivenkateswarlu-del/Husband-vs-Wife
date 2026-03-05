// Funny couple memes with text-based content
const memes = [
    { text: "When he says he'll do the dishes\n[Image of husband with soap everywhere]\nWife: 'That's not how you do it!'\nHusband: 'But I tried...'", alt: 'Dishes meme' },
    { text: "Wife: Where are my keys?\nHusband: In your pocket\n[Both searching frantically]\nKeys were in the fridge", alt: 'Keys meme' },
    { text: "Me trying to be romantic vs Reality\n[Left: Candlelit dinner]\n[Right: Ordering takeout at 10 PM]", alt: 'Romantic fail' },
    { text: "Husband: I love you\nWife: Prove it\nHusband: *does the dishes*\nWife: That's a start", alt: 'Prove it meme' },
    { text: "When the remote is missing\nHusband: Have you seen the remote?\nWife: It's right there\nHusband: Where?\nWife: *points* There!", alt: 'Remote control' },
    { text: "Couples therapy be like\nTherapist: How do you communicate?\nHusband: We yell\nWife: He starts it\nTherapist: *sighs*", alt: 'Therapy meme' },
    { text: "Me after eating my wife's cooking\n[Chef's kiss]\nWife: Was it good?\nMe: It was... interesting", alt: 'Cooking compliment' },
    { text: "When he forgets our anniversary\nWife: Happy anniversary!\nHusband: What's today?\nWife: Our anniversary!\nHusband: Oh... Happy anniversary!", alt: 'Anniversary forget' },
    { text: "Marriage in a nutshell\nYear 1: Can't keep hands off each other\nYear 5: Can't find each other in the house", alt: 'Marriage nutshell' },
    { text: "Wife: Let's go out\nHusband: Netflix?\nWife: Fine...\n[Both on couch with popcorn]", alt: 'Netflix date' },
    { text: "When she says she's fine\nHusband: Are you okay?\nWife: I'm fine\nHusband: You sure?\nWife: I'M FINE!\nHusband: Okay, just checking", alt: 'She\'s fine' },
    { text: "Husband dance moves\n[Stick figure dancing terribly]\nWife: Honey, please stop\nHusband: But I'm grooving!", alt: 'Dance moves' },
    { text: "Me vs My wife in arguments\nMe: Makes logical points\nWife: Wins every time\nMe: How?\nWife: Because I'm right", alt: 'Argument winner' },
    { text: "When the WiFi goes down\nHusband: I'll fix it!\n[Unplugs everything]\nWiFi: Still down\nHusband: Technology hates me", alt: 'WiFi down' },
    { text: "Love is blind but marriage is an eye opener\n[Before: Heart eyes]\n[After: Magnifying glass]", alt: 'Love blind' }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('meme-grid');
    const searchInput = document.getElementById('meme-search');
    let currentMemes = [...memes];

    function renderMemes(memesToRender) {
        grid.innerHTML = '';
        memesToRender.forEach((meme, index) => {
            const item = document.createElement('div');
            item.className = 'meme-item';
            const memeDiv = document.createElement('div');
            memeDiv.className = 'meme-text';
            memeDiv.textContent = meme.text;
            memeDiv.onclick = () => openLightbox(memes.indexOf(meme));
            item.appendChild(memeDiv);
            grid.appendChild(item);
        });
    }

    renderMemes(currentMemes);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = memes.filter(meme => meme.alt.toLowerCase().includes(query) || meme.text.toLowerCase().includes(query));
        renderMemes(filtered);
    });
});

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    lightboxContent.textContent = memes[index].text;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}