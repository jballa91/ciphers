
// Some Test variables
// const key = 'cat';
// const msg = 'You can type out anything you want!'

// Give a way to make and interact with columns
class Column {
    constructor(key, val, index, arr = []) {
        this.key = key;
        this.val = val;
        this.index = index;
        this.arr = arr;
    }

    push(val) {
        this.arr.push(val);
    }
}

const columnEncode = (key, msg, x) => {
    // Declare some more variables    
    /* Going to need the alphabet for Indices to
    order the columns and eliminate punctuation */
    const alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let keyArr = key.toLowerCase().split('');
    let msgArr = msg.toLowerCase().split('').filter(el => (el !== ' '));
    let n = keyArr.length;

    // Idiot check
    for (let i = 0; i < key.length; i++) {
        if (!alphArr.includes(keyArr[i])) {
            return 'your key should be a word that only contains letters!'
        }
    }

    // Make the number of columns required by the key
    let arrOfCol = [];
    keyArr.forEach((char, i) => {
        let column = new Column(char, alphArr.indexOf(char), i);
        arrOfCol.push(column);
    });

    // Put the characters in the correct columns
    arrOfCol.forEach((col) => {
        for (let i = col.index; i < msgArr.length; i += n) {
            if (alphArr.includes(msgArr[i])) {
                col.push(msgArr[i]);
            } else {
                continue;
            }
        }
    });

    // Put the columns in order
    let orderedArrOfCol = [];
    for (let i = 0; i < alphArr.length; i++) {
        arrOfCol.forEach(col => {
            if (col.val === i) {
                orderedArrOfCol.push(col);
            }
        });
    }

    // Get the encoded string
    let encoded = [];
    orderedArrOfCol.forEach(col => {
        encoded.push(...col.arr);
    });
    let encodedStr = encoded.join('').toUpperCase();

    // Recurse if you want to encode multiple times
    if (x > 1) {
        return columnEncode(key, encodedStr, x - 1);
    }
    return encodedStr;
}

export { columnEncode }

// Some test calls
// console.log(columnEncode('cat', 'hello what are you doing'))
// console.log(columnEncode(key, msg, 3));
// console.log('CDITPIUUURAAATNUNIMINOOITLGSECEQQISIRALGASAEDN');
// console.log(columnEncode(key, msg, 3) === 'ATUOEPYTNACUOYTNAWUOYGNIHTYN');