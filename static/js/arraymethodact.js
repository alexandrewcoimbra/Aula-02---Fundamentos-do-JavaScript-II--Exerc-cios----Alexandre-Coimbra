//  1

// function camelize (str) {
//     const words = str.split('-');
    
//     const wordsUpper = words.map((word, index) => {
//         if (index == 0) {
//         return word;
//     }
//         return word[0].toUpperCase() + word.slice(1);
//     })
//     const merge = wordsUpper.join('')
//     return alert(merge)
// }



// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// 3

// function filterRangeInPlace (arr, a, b) {
//     arr.forEach((item, index) => {
//         if (item < a || item > b)
//             arr.splice(index, 1)
//     })  
//     return arr
//     }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// alert( arr );

// 4

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );

// 5

// function copySorted (arr) {
//     copyArr = [...arr].sort()
//     return copyArr
// } 

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// 6
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((person) => {
//     return person.name
// })

// alert( names ); // John, Pete, Mary

// 7

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith