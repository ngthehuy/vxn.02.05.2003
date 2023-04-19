const countdown = document.querySelector('.countdown');

const interval = setInterval(() => {
const dealine = new Date(2023, 2, 2, 00, 00, 00);
const current = new Date();
const diff = dealine - current;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
<div data-content = "Days">${days}</div>
<div data-content = "Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
<div data-content = "Minutes">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
<div data-content = "Seconds">${seconds.length === 1 ? `0${seconds}` : seconds}</div>
`;
    if (diff < 0) {
        clearInterval(interval);
        countdown.innerHTML = "<a>HERE WE GO!!</a>";
    }
const results = document.querySelector('a');
results.setAttribute('href', 'hpbd.html');
}, 1000)


