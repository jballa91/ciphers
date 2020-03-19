

// Test variable
// let msg = 'Hello,  James, how are you?';


// The default square for this business
let defaultSquare = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'ij', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
];

const polybius = (msg, square = defaultSquare) => {
    // Let's declare some variables
    let msgArr = msg.toLowerCase().split('');

    // Let's get an array containing the encoded characters
    let encArr = msgArr.map(el => {
        let ij = '13'
        for (let i = 0; i < square.length; i++) {
            for (let j = 0; j < square[i].length; j++) {
                if (el === square[i][j]) {
                    return `${i}${j}.`;
                } else if (el === 'i' || el === 'j') {
                    return `${ij}.`;
                } else if (!square.includes(el)) {
                    continue;
                }
            }
        }
    });


    // Return the encoded message
    let encoded = encArr.join('');
    return encoded;
};

export { polybius }

// Test call
// console.log(polybius(msg));