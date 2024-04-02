
//function with two parameters which takes in passed arguments iterates over the sequence and give us some results.

function getArray(firstNum, lastNum) {        //getArray function takes in two parameters
    let array = [];                           // initialized empty array that should be used to store in the new array.

    //loop to start at firstNum and continue as long as (i) is lessthan or equal to lastNum.
    for (let i = firstNum; i <= lastNum; i++) {  
      array.push(i);                    //add the current value of (i) to (array) Array.
    }
    return array;          //return the new array which should contain numbers between firstNum and lastNum (inclusive).
  }
 
  console.log(getArray(4, 7));                //log: [ 4, 5, 6, 7 ]
  console.log(getArray(-4, 7))                //log: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]