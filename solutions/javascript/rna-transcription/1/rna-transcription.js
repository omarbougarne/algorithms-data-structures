//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let splitDna = dna.split('');
  let rna = []
  splitDna.forEach((char) => {
    
  switch (char) {
    case 'G':
      rna.push('C')
      break;
    case 'C':
      rna.push('G')
      break;
    case 'T':
      rna.push('A')
      break;
    case 'A':
      rna.push('U')
      break;
  };
  });
  return rna.join("");
};
