// Initialize Variables below
let date = "MOnday 2019-03-18";
let time = ("10:05:34 AM");
let astronautCount = (7);
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount*averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount>7){
    console.log('not ready');
    preparedForLiftoff = false;
};
// add logic below to verify all astronauts are ready
if(astronautStatus != "ready"){
    console.log("not ready");
    preparedForLiftoff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg>maximumMassLimit){
    console.log("not ready-- mass");
    preparedForLiftoff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelcius<-300 || fuelTempCelcius>-150){
    console.log("not ready");
    preparedForLiftoff = false;
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel<100){
    console.log("not ready");
    preparedForLiftoff = false;
}
// add logic below to verify the weather status is clear
if(weatherStatus!="clear"){
    console.log("not ready");
    preparedForLiftoff = false;
}
// Verify shuttle launch can proceed based on above conditions
console.log(preparedForLiftoff);
if(preparedForLiftoff){
    console.log("date:",date);
    console.log("time:",time);
    console.log("Astronaut Count",astronautCount);
    console.log("Crew Mass",crewMassKg);
    console.log("Fuel Mass:",fuelMassKg);
    console.log("Shuttle Mass:",shuttleMassKg);
    console.log("total Mass:",date);
}else {
    console.log("Launch Conditions not met. Canceling Launch.")
}