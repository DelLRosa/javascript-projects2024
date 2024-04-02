function makeLine(size){
    let line="";
    for (let i=0;i<size;i++){
        line+="#";
    }
    return line;
}
// console.log(makeLine(5));

function makeSquare(size){
    let square=makeRectangle(size,size);
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width,height){
    //height = how many lines to print
    // width = how many characters we want each line to have. 
    let rect="";
    for(let i=0;i<height;i++){
        rect+=`\n${makeLine(width)}`;
    }
    return rect;
}
// console.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    let downStairs = '';
    for(let i = 1; i<height+1; i++){
        downStairs+=`\n${makeLine(i)}`;
    }
    return downStairs;
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaceLine="";
    let spaces = "";
    let chars = makeLine(numChars);
    for(let i = 0; i<numSpaces;i++){
        spaces+=" ";
    }
    spaceLine=spaces+chars+spaces;
    
    return spaceLine;
}
// console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let isoTri='';
    for(let i =0;i<height;i++){
        isoTri+=`\n${makeSpaceLine(height - i - 1, 2 * i + 1)}`
    }
    return isoTri;
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond="";
    let top=makeIsoscelesTriangle(height);
    let bottom = "";
        for(i=0;i<top.length;i++){
            bottom = top[i]+bottom;
        }
    diamond=top + "\n"+bottom;
    return diamond;
}
console.log(makeDiamond(8));