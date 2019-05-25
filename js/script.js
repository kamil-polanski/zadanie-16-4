`use strict`;
const url = `http://api.icndb.com/jokes/random`;

const button = document.querySelector(`#get-joke`);
button.addEventListener(`click`, function() {
    getJoke();
});

const paragraph = document.querySelector(`#joke`);

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, url);
    xhr.addEventListener(`load`, function() {
        const response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}

window.onload = getJoke();