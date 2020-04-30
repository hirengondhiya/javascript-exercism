//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  return input.split('').map((c, i) => input[input.length-1-i]).join('');
};
