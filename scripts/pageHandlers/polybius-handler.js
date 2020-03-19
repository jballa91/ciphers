import { polybius } from '/scripts/encoding/polybius.js'

document.addEventListener('DOMContentLoaded', event => {

    const submit = document.getElementById('submit-button');
    const encodedTextArea = document.getElementById('encoded');

    submit.addEventListener('click', event => {
        const textToEncode = document.getElementById('input').value;
        encodedTextArea.innerHTML = `Encoded message: ${polybius(textToEncode)}`;
    });

});