//This function takes string as a parameter loops through each character, modifies it and brings back the results.

function swapCase(string) {     //let define function with parameter string.
    let newString = '';            //empty string that will store the modified string.


    //loop
    for (let i = 0; i < string.length; i++) {    
        
        //loop to iterate through each character in the string.


      if (string[i] === string[i].toLowerCase()) {  
         //check if the current character is strictly equal to lowercase

        newString += string[i].toUpperCase();       
        
        //add a uppercase if had a lowercase

      } else {
        newString += string[i].toLowerCase();       
        
        //add a lowercase if had a uppercase

      }
    }
    return newString;                          
    
    //returns the modified string

  }
 
  console.log(swapCase('The Quick Brown Fox'));       
  
  //log: tHE qUICK bROWN fOX