//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planetName, ageInSeconds) => {
  
  const PLANET_DATA = [
  { name: "mercury", period: 0.2408467 },
  { name: "venus", period: 0.61519726 },
  { name: "earth", period: 1.0 },
  { name: "mars", period: 1.8808158 },
  { name: "jupiter", period: 11.862615 },
  { name: "saturn", period: 29.447498 },
  { name: "uranus", period: 84.016846 },
  { name: "neptune", period: 164.79132 }
];

    const planet = PLANET_DATA.find(p => p.name.toLowerCase() === planetName.toLowerCase());
      if(!planet) throw new Error('not a planet');
     let result = (ageInSeconds/31557600) / planet.period; 
  return Math.round(result*100)/100;
};
