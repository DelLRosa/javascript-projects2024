//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
//Sort each array in decending order.
function recursiveSortArray (unsortedArray, newArray=[]){ //
    if (unsortedArray.length===1){
        newArray.push(unsortedArray[0]);
    } else {
        newArray.push(findMinValue(unsortedArray));
        unsortedArray.splice(unsortedArray.indexOf(findMinValue(unsortedArray)),1);
        recursiveSortArray(unsortedArray,newArray);
    }
    return newArray;
}

console.log(recursiveSortArray(nums1));
// console.log(sortArray(nums2));
// console.log(sortArray(nums3));
