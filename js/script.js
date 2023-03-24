const usernameInput = document.getElementById("username-input");
const usernameText = document.getElementById('username-text');
const generateBtn = document.getElementById('generate-btn');
const shareBtn = document.getElementById('share-btn');
const enterBtn = document.getElementById('enter-btn');
const audio = document.getElementById("audio");
const welcomePage = document.getElementById("welcome-page");

const getUsername = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('q');
    return username;
}

const loadPage = (e) => {
    let username = getUsername();
    if (username != null) {
        usernameText.textContent = username;
    } else {
        usernameText.textContent = "[Your Name]";
    }
}

window.onload = loadPage;

shareBtn.addEventListener('click', async () => {
    window.open(`whatsapp://send?text=${getUsername() != null ? `*${getUsername()}*` : "Someone"} *Send You a Surprize message*. Open it once 👉  ${window.location.href}`)
});

enterBtn.addEventListener('click', () => {
    welcomePage.classList.add('animate__bounceOutUp');
    audio.play();
})