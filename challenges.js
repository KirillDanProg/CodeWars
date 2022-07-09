//  5 KUY Moving Zeros To The End
function moveZeros(arr) {
  let zeros = [];
  let rest = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [...rest, ...zeros];
}
// Moving Zeros To The End

// 6 KUY Does my number look big in this?
function narcissistic(value) {
  let res = 0;
  let valStr = value.toString();
  for (let i = 0; i < valStr.length; i++) {
    res += mult(Number(valStr[i]), valStr.length);
  }
  if (res === value) {
    return true;
  } else {
    return false;
  }
}
function mult(x, n) {
  if (n === 1) {
    return x;
  }
  return x * mult(x, n - 1);
}
// 6 KUY Does my number look big in this?

//Reduce My Fraction
function reduce(fraction) {
  let [one, two] = fraction;
  let res = [];
  for (let i = 2; i < one; i++) {
    while (one % i === 0 && two % i === 0) {
      one /= i;
      two /= i;
    }
  }
  return [one, two];
}
// Reduce My Fraction

//Remove the minimum
function removeSmallest(numbers) {
  let copy = [...numbers];
  let copy2 = [...numbers];
  let minNum = copy
    .sort((a, b) => a - b)
    .reverse()
    .pop();
  let indexMin = numbers.indexOf(minNum);
  copy2.splice(indexMin, 1);
  return copy2;
}
//Remove the minimum

function isPangram(string){
  let str = string.toLowerCase().replace(/\s/g, '').replace(/[0-9]/g, "")
  console.log(str)
  let set = new Set(str)
  if(set.size < 26) {
    return false
  } else {
    return true
  }
}