function decryptText(encryptedText, shiftAmount){
    var regText = encryptedText;
    var amount = shiftAmount;

    var strRegText = regText.toString();

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < strRegText.length; i ++) {
        if (shiftAmount > 0 || shiftAmount <= -23){
            output = 'No decrypted text available. Please try again!';
        }

		// Get the character we'll be appending
        var c = strRegText[i];
        
        // Remove commas
        if (c.match(/,/)) {
            c = '';
        }
        //Check for other non-letter characters
        else if (c.match(/[^a-zA-Z\W]/g)) {
            alert('Error, please only type in LETTERS (uppercase or lowercase).');
            output = 'No decrypted text available. Please try again!'
            break;
        //Encrypts
        } else {
			// Get its UTC code
			var code = strRegText.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
				
			// Lowercase letters
			else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            } 
		}
		// Append
		output += c;
    }
    document.getElementById('decrypt-output-title').innerHTML = '<b>' + 'Decoded result:' + '</b>' + '<br>';
    document.getElementById('decrypt-output').innerHTML = output + '<br>';
}

function encryptText() {
    var regText = prompt('Enter text to "encrypt":');
    var shiftAmount = parseInt(prompt('How much would you like to shift?').toString());
    var amount = shiftAmount;
    var strRegText = regText.toString();

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < strRegText.length; i ++) {
        if (shiftAmount < 0 || shiftAmount >= 23){
            alert('Sorry, at this time our cipher program only works with shifts from 0-22.');
            output = 'No encrypted text available. Please try again!';
            break;
        }

		// Get the character we'll be appending
        var c = strRegText[i];
        
        // Remove commas
        if (c.match(/,/)) {
            c = '';
        }
        //Check for other non-letter characters
        else if (c.match(/[^a-zA-Z\W]/g)) {
            alert('Error, please only type in LETTERS (uppercase or lowercase).');
            output = 'No encrypted text available. Please try again!'
            break;
        //Encrypts
        } else {
			// Get its UTC code
			var code = strRegText.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
				
			// Lowercase letters
			else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            } 
		}
		// Append
		output += c;
    }
    document.getElementById('encrypt-output-title').innerHTML = '<b>' + 'Encoded result:' + '</b>' + '<br>';
    document.getElementById('encrypt-output').innerHTML = output + '<br>';

    decryptText(output, -amount);
}