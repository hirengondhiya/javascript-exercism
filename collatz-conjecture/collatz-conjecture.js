//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function* collatzConjecture(n) {
  let newN = n;
  while(newN > 1) {
    newN = newN % 2 == 0? newN / 2 : 3 * newN + 1;
    yield newN;
  }
}

export const steps = (n) => {
  if(n > 0) {
    return [...collatzConjecture(n)].length
  }
  throw new Error("Only positive numbers are allowed");
};
