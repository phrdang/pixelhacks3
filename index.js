var  capLetter = 0;
var lowLetter = 0;
var numInPassword = 0;
var specialChar = 0;
var consecutive = 0;

function validPassword()
{
var password = prompt("Please enter your password");
var len = password.length;

var bigLetters = /^[A-Z]*$/;
var smallLetters = /^[a-z]*$/;
var numbers = /^[0-9]*$/; 

var i;
for (i = 0; i < len; i++) 
{ 
  if(password.charAt(i) == bigLetters)
  {
    capLetter++;
  }
  else if (password.charAt(i) == smallLetters)
  {
    lowLetter++;
  }
  else if (password.charAt(i) == numbers)
  {
    numInPassword++;
  }
  else if (password.charAt(i) == "!"||password.charAt(i) == "@"||password.charAt(i) == "#"|| password.charAt(i) =="$"
  || password.charAt(i) == "%"||password.charAt(i) == "^"||password.charAt(i) == "&"|| password.charAt(i) =="*"||
  password.charAt(i) == "("||password.charAt(i) == ")"||password.charAt(i) == "-" || password.charAt(i) == "+"||
  password.charAt(i) == "_"|| password.charAt(i) == "="||password.charAt(i) == "{"||password.charAt(i) == "}"||
  password.charAt(i) == "["||password.charAt(i) == "]"||password.charAt(i) == "|"||password.charAt(i) == ":"||
  password.charAt(i) == ";" || password.charAt(i) == "'"||password.charAt(i) == "<"||password.charAt(i) == ">"||
  password.charAt(i) == "?"||password.charAt(i) == "`"||password.charAt(i) == "~")
  {
    specialChar++;
  }

}

if(capLetter == 0 || lowLetter == 0 || numInPassword == 0 || specialChar == 0 || len < 8)
{
    document.getElementById('passwordOutput').innerHTML = "Invalid Password";
    
}
else if (capLetter !== 0 || lowLetter !== 0 || numInPassword !== 0 || specialChar !== 0 )
{
    document.getElementById('passwordOutput').innerHTML = "Valid Password";
  
  }
        
}