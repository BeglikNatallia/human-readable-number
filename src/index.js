module.exports = function toReadable (number) {
    const ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const fromTenToNineteen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const dozens = {
        0: ' ',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if(number > 0 && number < 10){
        return ones[number];
    }

    if(number >= 10 && number < 20) {
        return fromTenToNineteen[number];
    }

    let [hundred, dozen, one] = number.toString().split('');

    return (hundred ? `${ones[hundred]} hundred ` : '') + (dozen ? `${dozens[dozen]}` : '') + ((one !== '0') ? ` ${ones[one]}` : '');
};
