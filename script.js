
       const emojis = ['✨']; // variety

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('falling-emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.fontSize = Math.random() * 15 + 10 + 'px'; // <<< SMALLER (10px–25px)
        emoji.style.animationDuration = Math.random() * 3 + 3 + 's'; 
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 9000);
    }

    setInterval(createEmoji, 150);