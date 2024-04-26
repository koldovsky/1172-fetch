const headerText = document.querySelector('.header__title');

const greetings = [
    'ПРИВІТ!',
    'ВІТАЮ!',
    'HELLO!',
    'GREETINGS!',
    'HEY!',
    'HOLA!'
];

function getRandomEl(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

// headerText.style.color = 'red';
// headerText.classList.add('highlight');
headerText.innerText = getRandomEl(greetings);

