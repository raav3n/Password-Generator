# Password Generator
Random password generator. Allows toggle for symbols and numnbers, as well as a range of 5 to 20.

### How it works
Using crypto.getRandomValues to generate a random value which is used to pull a character with String.fromCharCode. <br> 
From here it ensures the character generated matches the users options using regex.


