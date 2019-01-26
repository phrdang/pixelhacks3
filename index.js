var capLetter = 0;
var lowLetter = 0;
var numInPassword = 0;
var specialChar = 0;
var consecutive = 0;
var output = "";

function validPassword()
{
var password = prompt("Enter a password: ");
var len = password.length;
var i;
for (i = 0; i < len; i++) 
{ 
if (password.charAt(i) == "A"||password.charAt(i) == "B"||password.charAt(i) == "C"|| password.charAt(i) =="D"
     || password.charAt(i) == "E"||password.charAt(i) == "F"||password.charAt(i) == "G"|| password.charAt(i) =="H"||
    password.charAt(i) == "I"||password.charAt(i) == "J"||password.charAt(i) == "K"|| password.charAt(i) =="L"|
    password.charAt(i) == "M"||password.charAt(i) == "N"||password.charAt(i) == "O"|| password.charAt(i) =="P"||
    password.charAt(i) == "Q"||password.charAt(i) == "R"||password.charAt(i) == "S"|| password.charAt(i) =="T"||
    password.charAt(i) == "U"||password.charAt(i) == "V"||password.charAt(i) == "W"|| password.charAt(i) =="X"||
    password.charAt(i) == "Y"||password.charAt(i) == "Z")
    {
        capLetter++;
    }
else if(password.charAt(i) == "a"||password.charAt(i) == "b"||password.charAt(i) == "c"|| password.charAt(i) =="d"
|| password.charAt(i) == "e"||password.charAt(i) == "f"||password.charAt(i) == "g"|| password.charAt(i) =="h"||
password.charAt(i) == "i"||password.charAt(i) == "j"||password.charAt(i) == "k"|| password.charAt(i) =="l"|
password.charAt(i) == "m"||password.charAt(i) == "n"||password.charAt(i) == "o"|| password.charAt(i) =="p"||
password.charAt(i) == "q"||password.charAt(i) == "r"||password.charAt(i) == "s"|| password.charAt(i) =="t"||
password.charAt(i) == "u"||password.charAt(i) == "v"||password.charAt(i) == "w"|| password.charAt(i) =="x"||
password.charAt(i) == "y"||password.charAt(i) == "z")
    {
        lowLetter++;
    }
else if(password.charAt(i) == "0"||password.charAt(i) == "1"||password.charAt(i) == "2"|| password.charAt(i) =="3"
    || password.charAt(i) == "4"||password.charAt(i) == "5"||password.charAt(i) == "6"|| password.charAt(i) =="7"||
    password.charAt(i) == "8"||password.charAt(i) == "9")
    {
        numInPassword++;
    }
   
else if (password.charAt(i) == "!"||password.charAt(i) == "@"||password.charAt(i) == "#"|| password.charAt(i) =="$"
    || password.charAt(i) == "%"||password.charAt(i) == "^"||password.charAt(i) == "&"|| password.charAt(i) =="*"||
    password.charAt(i) == "("||password.charAt(i) == ")"||password.charAt(i) == "-" || password.charAt(i) == "+"||
    password.charAt(i) == "_"|| password.charAt(i) == "="||password.charAt(i) == "{"||password.charAt(i) == "}"||
    password.charAt(i) == "["||password.charAt(i) == "]"||password.charAt(i) == "|"||password.charAt(i) == ":"||
    password.charAt(i) == ";" || password.charAt(i) == "'"||password.charAt(i) == "<"||password.substring(i, i+1) == ">"||
    password.charAt(i) == "?"||password.charAt(i) == "`"||password.charAt(i) == "~")
    {
    specialChar++;
    }

}

if(capLetter == 0)
{
   output +=  "<p> &#10060;" + "    At least one uppercase letter." + "<br>";
}
else if(capLetter !== 0)
{
   output += "<p>&#x2705;"  + "    At least one uppercase letter." + "<br>";
}
if(lowLetter == 0)
{
    output +=  "<p> &#10060;" + "    At least one lowercase letter." + "<br>";
}
else if(lowLetter !== 0)
{
    output +=  "<p>&#x2705;"  + "    At least one lowercase letter." + "<br>";
}
if(numInPassword == 0)
{
    output +=  "<p> &#10060;" +  "    At least one number."+ "<br>";
}
else if(numInPassword !== 0)
{
    output +=  "<p>&#x2705;" + "    At least one number."+ "<br>";
}
if(specialChar == 0)
{
    output += "<p> &#10060;" +  "    At least one special character."+ "<br>";
}
else if(specialChar !== 0)
{
    output += "<p>&#x2705;" + "    At least one special character."+ "<br>";
}
if(len < 8)
{
    output += "<p> &#10060;" +  "    At least 8 characters."+ "<br>";
}
else if(len >= 8)
{
    output += "<p>&#x2705;" + "    At least 8 characters."+ "<br>";
}
document.getElementById('passwordOutput').innerHTML = output + "<br>";
        
}