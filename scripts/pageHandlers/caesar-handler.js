import { caesar } from '/scripts/encoding/caesar.js';

// document.addEventListener('DOMContentLoaded', event => {
//     const submit = document.getElementById('submit-button');
//     const encodedTextArea = document.getElementById('encoded');

//     submit.addEventListener('click', event => {
//         const shift = document.getElementById('shift').value;
//         const msg = document.getElementById('input').value;
//         encodedTextArea.innerHTML = `Encoded message: ${caesar(shift, msg)}`;
//     });
// });

document.addEventListener('DOMContentLoaded', event => {

    const submit = document.getElementById('submit-button');
    const encodedTextArea = document.getElementById('encoded');

    submit.addEventListener('click', event => {
        const textToEncode = document.getElementById('input').value;
        const shift = document.getElementById('shift').value;
        encodedTextArea.innerHTML = `Encoded Message: ${caesar(Number(shift), textToEncode)}`;
    });

});
