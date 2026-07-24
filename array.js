// let arr = [10,1,2,3,4,5]

// console.log(arr[0]);


// const ar = new Array(1,2,3,4,5)

// console.log(ar);

// methods

// ar.push(6,7)

// console.log(ar);

// ar.pop()

// console.log(ar);

// insert ar start

// ar.unshift(0.01)

// console.log(ar);

// remove from starting
// ar.shift()

// console.log(ar);


// element present or not check with includes


// console.log(ar.includes(20)); // return boolean 

// console.log(ar.indexOf(20)); // return -1 if not found else return index

// join method : convert list into string

// const ele = new Array(1,2,3,4,5,6,10)

// const arr = ele.join(', ')

// console.log(arr);

// const new_ar =  [1,2,3,4,5,6,10]

// console.log(new_ar); // main arr 

// const slice_check = new_ar.slice(1,4)

// console.log(slice_check); // after slice  o/p: [2,3,4]

// const splice_check = new_ar.splice(1,4) 

// console.log(splice_check); // after splice o/p: [2,3,4,5]
// console.log("after splice og arr changed..",new_ar);



// const numbers = [1,2,3,4,5,6]

// const floats =[1.1,2.2,3.3,4.4,5.5,6.6]


// numbers.push(floats)

// console.log(numbers); // [ 1, 2, 3, 4, 5, 6, [ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6 ] ]

// access nested elems

// console.log(numbers[6]);
// console.log(numbers[6][0]);
// console.log(numbers[6][1]);


// add multiple values in the arr used concat : note => concat does not modify og array instead return new array

// const  merge = numbers.concat(floats);

// console.log(merge);  

/* o/p: 
[
    1,   2,   3,   4,   5,
    6, 1.1, 2.2, 3.3, 4.4,
  5.5, 6.6
]
 */

/// spread elems
// const new_merge = [...numbers, ...floats] 

// console.log(new_merge);

/* same o/p: 
[
    1,   2,   3,   4,   5,
    6, 1.1, 2.2, 3.3, 4.4,
  5.5, 6.6
]
 */

// flaten array 

const nested_arr = [1,2,3,[2,3,4],5,6,[7,8,[9,10,11]]]


const flat_array = nested_arr.flat(Infinity)

console.log(flat_array);

console.log(flat_array.sort()); // output is unexpected , i thoutght o.p will [1,2,3,4] like this but check this : 

/*
[
  1, 10, 11, 2, 2, 3,
  3,  4,  5, 6, 7, 8,
  9
]

*/ 

// from method used convert str to arr

// console.log(Array.isArray("array")); // boolean return true false 



// from string
// console.log(Array.from("array")); //[ 'a', 'r', 'r', 'a', 'y' ]

// with array
console.log(Array.from([1,2,3,4,5])); //return array

// with dictinary

console.log(Array.from({name: 'rahul'})); // return empty list // important for intrviews



// of method for creating new array from values


let item1 = 'Rahul'
let item2 = 'Vipul'
let item3 = 'Parth'
let item4 = 'Mitesh'
let item5 = 'Jay'

console.log(Array.of(item1 , item2 , item3 , item4 , item5));

// output : [ 'Rahul', 'Vipul', 'Parth', 'Mitesh', 'Jay' ]

















