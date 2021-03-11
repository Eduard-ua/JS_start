
/* task 1 */

function uniq(arr) { 
  let result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }
  
  return result;
}

// let array = [{a: 1}, {b: 2}, {a: 1}, {b: 2}];

let array = ["sssss", "222", "333", "222", "333"];

alert(uniq(array));



/* task 2 */


let str = "Дерево";
let e = "е"
  , p = "р"
  , o = "о";
let newArr = [];
for (let elem of str) {
    console.log(elem);
    if (elem == e || elem == p || elem == o) {
      newArr.push(elem);
    }
}
alert(newArr);


/* task 3 */


let tArr = [12, "Second", "eleven", 14, "age", "love"];

let length = tArr.length;
let i = 0;
function loop (tArr) {
  i++;
  if (i < length) {
    console.log(tArr[i]);
    loop(tArr);
  } 
}

loop(tArr);