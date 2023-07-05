// function merge(arr){
//     if (arr.length <=1 ) {
//         return arr
//     }
// let middle = Math.floor(arr.length/2);
// let left = arr.slice(0,middle);
// let right = arr.slice(middle);
// return sort(merge(left),merge(right))
// }
// function sort(left,right){
//     let empty =[];
//     while (left.length && right.length) {
//         if(left[0] < right[0]){
//             empty.push(left.shift())  
//         }
//         else {
//             empty.push(right.shift())
//         }
//     }
//     return[...empty,...left,...right]
// }


// function binary(arr,target){
//     let left = 0;
//     let right = arr.length-1;

//     while (left <= right) {
//         let middle= (left+right/2);
//         if (arr[middle===target]) {
//             return middle
//         }
//         else if (arr[middle]>target) {
//             right = middle -1
//         }
//         else{
//             left = middle +1
//         }
//     }   
// }

// let arr =merge([23,45,67,13,10,7,3,]);
// let target = 7;
// console.log(binary(arr,target))

//write a function to count the number of vowels in the following string
// function findVowels(str){
//     var count =0;
//     var vowels =['a','e','i','o','u'];
//     for (v in vowels) {
//         if (v.includes(str)) { 
//             count++  
//         }
//     } 
//     return count
// }
// let str ="beutiful"
// console.log(findVowels(str))

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  let str ="beutifUl"
console.log(countVowels(str))


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5.
//  Console the array with the new value

// function MultipliedArray(array){
//     for(let i = 0 ; i<array.length ; i++){
//        if(i<4){
//           (array[i]*=8)
//        }else{
//           (array[i]+=5)
//        }
     
//     }
//     console.log(array)
//    }
//    let array = [1,2,3,4,5,6,7]
//    MultipliedArray(array)


   function addNumbers(array){
    for (let i = 0; i < array.length; i++) {
        if (i<[4]) {
            console.log(array[i]*=8)
        }
        else{
            console.log((array[i] += 5));
        }
    }
   }
   let array =[2,3,4,5,6,7];
   addNumbers(array)

// write a JS program to extract the characters at odd indices from the string below:
// "beautiful"

  let str1 ="beautiful";
  let emptyStr = ""
  for (let i = 0; i < str1.length; i+=2) {
    emptyStr+=str1[i]
  }
console.log(emptyStr)

// write a Javascript mfunction that given a string,reverse each word in a sentence without using inbuilt
// methods

function stsmt(str2){
  return str2.split('').reverse().join('')
}
let str2 = "extravaganza"
console.log(stsmt(str2))

//write a JS function to capitalize the first letter of each word in astring
function capitalizeWords(str5){
  return str5.map(art =>{
    const firstLetter =art.charAt(0).toUpperCase();
    const restLetter =  art.slice(1).toLowerCase();
     return firstLetter+restLetter

  })
}
const str5 =["annette"]
  console.log(capitalizeWords(str5))

  // write a JavaScript function that takes in the following array and use a while loop and
  // break when
  // the items is equal to the fourth index
  function findIn(str7){
    let i = 0
    while (i <str7.length) {
      if (1 === 4) {
        break;
      }
      console.log(str7[i]);
      i++
    }
  }
let str7 =[1,2,3,4,5,6,7,8,9];
console.log(findIn(str7))

//Write a javascript program to console the most occuring element in an array. For example, given 
//["apple","strawberries","grapes","grapes"] the output should be apple
