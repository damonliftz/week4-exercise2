function sum(n) {
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function funkyMath(...args) {
  if (args.length === 2) {
    return args[1] - args[0];
  } else if (args.length === 3) {
    return args[0] + args[1] + args[2];
  } else if (args.length === 4) {
    const sum1 = args[0] + args[1];
    const sum2 = args[2] + args[3];
    return sum1 / sum2;
  } else {
    return "Invalid number of arguments";
  }
}
const originalArray = [1, 2, 33, 45, 6, 44];
const oddNumbersSorted = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 !== 0) {
    oddNumbersSorted.push(originalArray[i]);
  }
}

oddNumbersSorted.sort((a, b) => a - b);

const me = {
  firstName: "Aiden",
  lastName: "Damon",
  age: 25,
  favouriteColour: "Green",
  dreamCar: "Nissan S15 Silvia"
};

me.favouriteFood = "Zinger wings";

delete me.age;

console.log(sum(5));            
console.log(sum("hello"));        
console.log(factorial(4));        
console.log(funkyMath(8, 2));      
console.log(funkyMath(1, 2, 3));   
console.log(funkyMath(8, 2, 3, 5));
console.log(oddNumbersSorted);     
console.log(me);                   