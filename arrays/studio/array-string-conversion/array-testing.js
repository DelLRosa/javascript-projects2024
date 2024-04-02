
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//b) 
function reverseCommas() {
	let check = strings[0]; 
	//check is instantiatied as the protoarray that contians comma
	let output = [];
	//output is initialized to an empty variable. 
	if(check.includes(",")){
		// if check contains commas, then mutate check and assign outcome to output. 
		output = check.split(",").reverse().join(",")

	}

	return output;
}

//c)
function semiDash() {
	let check = strings[1];
	let output=[];

	if(check.includes(';')){
		output=check.split(";").sort().join("-");
	}

	return output;
}

//d)
function reverseSpaces() {
	let check;
	let output;

	return output;
}

//e)
function commaSpace() {
	let check;
	let output;

	return output;
}


// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};