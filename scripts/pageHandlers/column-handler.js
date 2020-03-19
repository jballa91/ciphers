import { columnEncode } from '/scripts/encoding/column.js';

document.addEventListener('DOMContentLoaded', event => {

    const submit = document.getElementById('submit-button');
    const encodedTextArea = document.getElementById('encoded');

    submit.addEventListener('click', event => {
        const textToEncode = document.getElementById('input').value;
        const key = document.getElementById('key').value;
        const x = document.getElementById('x').value;
        encodedTextArea.innerHTML = `Encoded Message: ${columnEncode(key, textToEncode, x)}`;
    });

});

