function degC(degF){
  let degC = (degF - 32) / 1.8;
  return degC + "C";
}

// let temp = degC(degF);
// console.log(degC(degF));
// minus 32 divide by 1.8 

// *3.7854 gallons to litres
let unit = prompt("Type gallons or temperature F");
function unitL(unitG){
  let unitL = unitG * 3.7854;
  return parseInt(unitL) + "L";
}
console.log(unitL(unit));
console.log(degC(unit));