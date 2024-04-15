//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores=[]){
        this.name=name;
        this.mass = mass; 
        this.scores=scores;
    }
    addScore = function(score) {
            this.scores.push(score);
    }
    average = function (){
        let sum = 0; 
        for (let i=0; i<this.scores.length; i++){
            sum+=this.scores[i];
        }
        let avg= sum/this.scores.length
        return Math.round(avg*10)/10;
    }
    status = function (){
        let average = this.average();
        if (average >=90){
            return "Accepted";
        } else if (average>=80){
            return "Reserve";
        } else if (average >=70){
            return "Probationary"
        }else {
            return "rejected :( "
        }
    } 
}

let bbear= new CrewCandidate ("Bubba Bear", 135, [88,85,90]);

let mmaltese= new CrewCandidate ("Merry Maltese", 1.5, [93,88,97]);
let gator = new CrewCandidate ("Glad Gator", 225, [75,78,62]);
// console.log(bbear, mmaltese,gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// console.log(bbear.scores);
// bbear.addScore(83);
// console.log(mmaltese.average())
console.log(`${bbear.name} earned an average test score of ${bbear.average()}% and has a status of ${bbear.status()}`)
console.log(`${mmaltese.name} earned an average test score of ${mmaltese.average()}% and has a status of ${mmaltese.status()}`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.