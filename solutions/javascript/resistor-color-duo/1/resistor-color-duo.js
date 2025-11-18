//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  { name: "black", value: 0 },
  { name: "brown", value: 1 },
  { name: "red", value: 2 },
  { name: "orange", value: 3 },
  { name: "yellow", value: 4 },
  { name: "green", value: 5 },
  { name: "blue", value: 6 },
  { name: "violet", value: 7 },
  { name: "grey", value: 8 },
  { name: "white", value: 9 }
];

export const decodedValue = (colors) => {
  const found1 = COLORS.find(color => color.name === colors[0] );
  const found2 = COLORS.find(color => color.name === colors[1] );
  
  return found1.value * 10 + found2.value;
};


