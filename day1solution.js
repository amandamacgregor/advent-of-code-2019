const Mass = [140170,75120,75645,134664,124948,137630,146662,116881,120030,94332,50473,59361,128237,84894,51368,128802,57275,129235,113481,66378,55842,90548,107696,53603,130458,80306,120820,131313,100303,59224,123369,140584,60642,68184,103101,82278,51968,51048,98139,60498,127082,71197,109478,71286,84840,141305,51800,72352,93147,73549,122739,62363,58453,59000,63564,63424,51053,120826,123337,130824,59053,77983,68977,67126,96051,53024,145647,139343,113236,59396,146174,148622,83384,86938,100673,80757,107675,147417,124538,136463,104609,149559,136037,54997,139674,101638,65739,70029,143847,122035,66256,78087,105045,108867,99630,127173,139021,139759,134171,104869]

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.

// let divided = Mass.map(mass => mass / 3)
// let rounded = divided.map(mass => Math.floor(mass))
// let subtracted = rounded.map(mass => mass - 2)
// let solution = subtracted.reduce((a,b) => a + b, 0)
// console.log(solution) //3263320

//refactored

const neededFuel = Mass
  .map(mass => mass / 3)
  .map(mass => Math.floor(mass))
  .map(mass => mass - 2)
  .reduce((a,b) => a + b, 0);
  console.log(neededFuel) //3263320

  //part two
// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

const eachModFuel = n => Math.floor(n / 3 - 2)

const fuelTotal = n => {
    const fuel = eachModFuel(n);
    return fuel > 0 ? fuel + fuelTotal(fuel) : 0;
  }

  const sumFuel = Mass
    .map(fuelTotal)
    .reduce((a,b) => a + b, 0);

  console.log(sumFuel) //4892135
