// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let circumference = Math.round(2*(3.14*radius));
  return circumference;
}



// Code your missionDuration function here:
function missionDuration(numOrbit,orbitRadius=2000,orbitSpeed=28000){
  let duration=(numOrbit*(orbitCircumference(orbitRadius)))/orbitSpeed;
  duration = Math.round(duration*100)/100;

  return duration;
}
// console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idArray){
  let randIndex = Math.floor(Math.random()*idArray.length);
  return idArray[randIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candObj,orbitRadius,orbitSpeed){
  let hours = missionDuration(3,orbitRadius,orbitSpeed);
  let o2=Math.round(candObj.o2Used(hours)*1000)/1000;
  return `${candObj.name} will perform the spacewalk, which will last ${hours} hours and require ${o2}kg of oxygen`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(candidateA));
 