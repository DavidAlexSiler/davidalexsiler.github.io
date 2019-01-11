////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, step) {
  //debugger;
  let rangeArr = [];
  if(start === end){
    console.log(rangeArr);
  }else if(start < end && !step){
    for(let i = start; i <= end; i++){
      rangeArr.push(i);
  }
    }else if(start < end && step > 0){
      for(let i = start; i <= end; i += step){
        rangeArr.push(i);
      }
    }else if(start < end && step < 0){
      console.log(rangeArr);
    }return rangeArr ;
}

 
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //debugger;
  let summedUp = 0;
  for(let i = 0; i < array.length; i++){
    summedUp += array[i];
  }
return summedUp;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //debugger;
  let newArr = [];
  for(let i = array.length - 1; i >= 0; i--){
    newArr.push(array[i]);
  }
return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  //reassign the first element to the last?
  for(var i = 0; i <= Math.floor((arr.length - 1) /2); i++){
    //
    let first = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = first;
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
var list = null;
for(let i = arr.length -1; i >= 0; i--){
  list = {
    value : arr[i],
    rest : list
  };
}
return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let arr = [];
  let x = list;
  while(x){
    arr.push(x.value);
    x = x.rest;
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  for(let i = 0; i <= num; i++){
    if(!list) return false;
    var myVal = list.value;
    list = list.rest;
  }
  return myVal;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
if(a === b) return true;
if(a === null || typeof a !== 'object' || b === null || typeof b !== 'object') return false;
let keysA = Object.keys(a);
let keysB = Object.keys(b);
if(keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
}
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
