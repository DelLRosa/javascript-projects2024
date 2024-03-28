const input = require('readline-sync');
// Bonus missions:
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepArray = sleepAids.split(',').sort();

let cargoHold = [foodArray, equipmentArray, petsArray, sleepArray];
console.log(cargoHold);

let cabinetNumber = Number(input.question("Select a cabinet:"));
let item = input.question("Search for item: ");

if (cabinetNumber >=0 && cabinetNumber < cargoHold.length) {
  console.log(`The cabinet contains: ${cargoHold[cabinetNumber]}.`);
  if (cargoHold[cabinetNumber].includes(item.toLowerCase())) {
    console.log(`Cabinet '${cabinetNumber}' DOES contain ${item}.`);
  } else {
    console.log(`Cabinet '${cabinetNumber}' DOES NOT contain ${item}.`);
  }
} else {
  console.log("Invalid entry.");
}