//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (stringToReverse) => {
  const reversedString = [];
  for(let i = stringToReverse.length-1; i >= 0; i--){
    reversedString.push(stringToReverse[i]);
  }
  return reversedString.join("");
};
