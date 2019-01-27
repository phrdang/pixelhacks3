function encryptText() {
    var regText = prompt('Enter text to "encrypt":');
    var amount = 2;

    var strRegText = regText.toString();
    console.log(strRegText);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < strRegText.length; i ++) {

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
	document.getElementById('encrypt-output').innerHTML = output;
};