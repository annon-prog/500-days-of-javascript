function removeSpaces(orgText){
    let removedSpaces = orgText.split(" ").join("");
    return removedSpaces;
}
 let text= removeSpaces("Dev tips daily");

 console.log(text);
//Day two practice:find the area of a circle.

const PI=3.14596;
function circumference(radius){
    let circlePerimeter = (radius) * PI * 2;
    return circlePerimeter;
}

let answer1 = circumference(7);
let answer2 = circumference(14);
let answer3 = circumference(21);

console.log(answer1);
console.log(answer2);
console.log(answer3);

//Day three practice:find the months with even and odd number of days.
const January=31;
const February=28;
const leapFebruary=29;
const March=31;
const April= 30;
const May=31;
const June=30;
const July=31;
const August=31;
const September=30;
const October=31;
const November=30;
const December=31;

function oddEvenMonth(days){
    if(days===28 ||days===30){
        return "Even month";
    }else if(days===31){
        return "Odd month";
    }else{
        return "Leap month";
    }
}
console.log(oddEvenMonth(January));
console.log(oddEvenMonth(February));
console.log(oddEvenMonth(August));
console.log(oddEvenMonth(November));

//Day four practice: finding the area of a rectangle
function area(length,width){
    return (length * width);
}
console.log(area(8,9));
console.log(area(7,6));
console.log(area(10,5));
console.log(area(16,15));

//Day 5 practice:
function getFactorial(number){
    if (number===0){
        return 1;
    }
    return number * getFactorial(number - 1);
}

console.log(getFactorial(5));
console.log(getFactorial(7));

// alternative
function factorialAlternative(number){
    let factorial = 1;
   if (number === 0 | number === 1){
    return 1;
   }
   for (let num = 2; num <= number; num++){
    factorial += num;
   }
   return factorial;
}
console.log(factorialAlternative(5));
console.log(factorialAlternative(7));

const  square= (num) => {
    return num * num;
}
console.log(square(8));
console.log(square(10));
console.log(square(12));
console.log(square(14));

const ageInDays = (age)=>{
   return age * 365;
}

console.log(ageInDays(20));
console.log(ageInDays(24));
console.log(ageInDays(18));
console.log(ageInDays(6));

const remainder = (alan, mike)=>{
    return alan % mike;
}
console.log(remainder(24,20))
console.log(remainder(18,10))
console.log(remainder(20,10))
console.log(remainder(18,6))

let foods={
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27

}

const scanning = (scannedItems)=>{
    return foods[scannedItems];
}

console.log(scanning('apples'))
console.log(scanning('oranges'))
console.log(scanning('plums'))
//
const isLeap = (year) => {
    if (year % 4 == 0 | year % 100 == 0 && year % 400 == 0){
      return "Leap year";
    }
     return "Not a leap year";
   }
   
   console.log(isLeap(1996));
   console.log(isLeap(1997));
   console.log(isLeap(1900));
   console.log(isLeap(2000));


//for loop exercises.
//create a for loop to print number 1 to 10
function printNumbers(){
    for (let i=1; i<=10; i++){
        console.log(i);
    }
}
printNumbers();

//print even numbers in a given array

const getEven = array =>{
    for (let i=0; i< array.length; i++){
        if (array[i] % 2 == 0){
            console.log(array[i]);
        }
    }
}

let array = [13,22,23,54,57,89,76,90,101];

getEven(array);

//create a 2D array using nested loops.
function printArray(arr){
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[0].length; j++){
            console.log(arr[i][j]);
        }
    }
}
let arr = [[1,2],[3,4],[5,6]];
printArray(arr);

//delete the occurence of an element

const deleteElem = (Arr,elem) => {
    for (let i=0; i< Arr.length; i++){
        if (Arr[i] == elem){
            Arr.splice(i,1);
        }
    }
    return Arr;
}

let Arr = [20,34,86,45,56,78,49];

console.log(deleteElem(Arr,56));

for (let i=0; i < 5; i++ ){
   setTimeout(()=>console.log(i),5000);
}

//finding the power
const findPow = (num, pow) => {
    let res = 1;
    for(let i=0; i<pow; i++){
        res = res * num;
    }
    return res;
}
console.log(findPow(4,3));
console.log(findPow(2,4));

//finding the sum of all the numbers in a loop
const allNumbers = (arr) =>{
    let count=0;
    for (let j=0; j <arr.length; j++){
        count += arr;
    }
    return count;
}
 let arrayNum = [2,3,4,5,6,7];
console.log(allNumbers(arr));

let a = 7;
let b = a;
a= 10;
console.log(b);

console.log(4>2>1 ===false);

const obj1= {first :20 , second: 30 , first : 50};
console.log(obj1);


