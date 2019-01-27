/*Don't forget to reset output*/
function encryptText() {
    var regText = prompt('Enter text to "encrypt":');
    var encText = [];
    var outputEncText;
    var uppercaseLetter = /[A-Z]/g;
    var lowercaseLetter = /[a-z]/g;
    var number = /[0-9]/g;

    lowerAlphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]

    upperAlphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ]

    for (character in regText) {
        /*Checks if input contains symbols*/
        if (regText[character].match(/[^0-9a-zA-Z]/g)) {
            alert('Error, please only type in letters or numbers. Do not include spaces.');
            outputEncText = 'No encrypted text available. Please try again!'
            break;
        
        /*Encrypts*/
        } else {
            if (regText[character].match(lowercaseLetter)) {
                for (letter in lowerAlphabet) {
                    if (regText[character] == lowerAlphabet[letter]) {
                        encText.push(lowerAlphabet[letter + 2]);
                        continue;
                    }
                }
            } else if (regText[character].match(uppercaseLetter)) {
                for (letter in upperAlphabet) {
                    if (regText[character] == upperAlphabet[letter]) {
                        encText.push(upperAlphabet[letter + 2]);
                        continue;
                    }
                }
            } 
            outputEncText = encText.toString();
        }
    }  
    document.getElementById('encrypt-output').innerHTML = outputEncText;
}