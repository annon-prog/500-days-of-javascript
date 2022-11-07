//day one lesson: how to remove spaces
function removeSpaces(orgText){
    let removedSpaces = orgText.split(" ").join("");
    return removedSpaces;
}
 let text= removeSpaces("Dev tips daily");

 console.log(text);

 //Day two lesson: how to find the area of a traingle
 function area (base, height){
    let answer=(base * height)/2;
    return answer;
 }
 console.log(area(3,4));
 console.log(area(9,16));

 //Day three: How to find the leap year
 function isLeapYear(year){
    if(year % 400 ===0 || ((year % 4 ===0 && year % 100 !== 0))){
        return true;
    }
    return false;

 }
 console.log(isLeapYear(2020));
 console.log(isLeapYear(2022));

 //Day 4: Find the maximum length of the third edge of a triangle
 function thirdEdge(side1 ,side2){
    return(side1 + side2) - 1;
 }
 console.log(thirdEdge(5,17));
 console.log(thirdEdge(8,10));