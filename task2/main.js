            //   #1

// numbers = [11, 32, 5.3, 75, 88.1];


// function getMinMaxForLoop(arr){
//   let maximum = arr[0];
//   let minimum = arr[0];
//   for (let i = 0 ; i < arr.length; i++) {
//     if (maximum < arr[i]) {
//       maximum = arr[i];
//     } else {
//       minimum = arr[i];
//     }
    
//   }
//  let result =  ([maximum, minimum]); 
//   return result;
// };
// console.log('getMinMaxForLoop : ',getMinMaxForLoop(numbers))



                //   #2

// var regEx = /c+/

// console.log(regEx.test("4453c"))



                // #3

// function arrayOfMultiples(num, length) {
//     var myArray = [];
//     for (i=0; i<length; i++) {
//         myArray[i] = num * (i+1);
//     }
//     return myArray;
// }

// console.log(arrayOfMultiples(5, 7));



                //   #4

// var str = prompt("enter your string to reverse it");
// var reversedString = str.split(" ").reverse().join(" ");

// console.log(reversedString);



               //     #5

// function squareDigits(num){

//     var digits = num.toString().split("");
//     var result = "";
//     for(let i in digits){
//         result += (parseInt(digits[i])**2 + "");
//     } 
//     return parseInt(result);
// }

// console.log(squareDigits(426));