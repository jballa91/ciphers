// Some Test Variables
// const shift = 3;
// const msg = 'Hello, James, how are you?';
// const msg2 = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';

// The function
const caesar = (shift, msg) => {

    // Let's declare some variables
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphArr = alphabet.split('');
    const caesArr = alphabet.split('');
    const msgArr = msg.toLowerCase().split('');

    // Make your CaesArray
    for (let i = 0; i < shift; i++) {
        let temp = caesArr.shift();
        caesArr.push(temp);
    }

    // Encode
    let caesArrMSG = msgArr.map(el => {
        if (alphArr.includes(el)) {
            let pos = alphArr.indexOf(el);
            return caesArr[pos];
        } else {
            return el;
        }
    });

    // Return the encoded message
    return caesArrMSG.join('').toUpperCase();
};

export { caesar };
// Some test calls
// console.log(caesar(3, msg));
// console.log(caesar(23, msg2));