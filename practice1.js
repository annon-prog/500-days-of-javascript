//Day one lesson: how to remove spaces
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

 //Day 5 : find factorial of a number n, where n > 0
 const getFactorial = number =>
 number === 0 ? 1 : number * getFactorial(number - 1);

 //Day 6: Check whether a number is perfect or not
 function checkPerfect(n){
 let i, sum = 0;
 for (i=1; i<=n/2; i++){
   if (n%i == 0){
      sum += i;
   }
 }
 if (n === sum && sum !== 0){
   return true;
 }
   return false;
}

console.log(checkPerfect(28));
console.log(checkPerfect(36));

//Day seven: Check whether a number is an armstrong
function checkArmstrong(n){

   let sum = 0, orgNum = n;
 
   while(n > 0){
 
     let remainder = n % 10;
 
     sum += remainder * remainder * remainder;
 
     n = parseInt(n / 10);
     
   }
   
   if(sum == orgNum){
 
     return true;
     
   } else{
 
     return false;
     
   }
 }
 
 
 console.log(checkArmstrong(153));
 
 console.log(checkArmstrong(326));
 //Day eight: Reversing a number without using .reverse(),.split() or .join()

 function revNumber(num){

   let rev = 0, lastDigit;
 
   while(num > 0){
 
     lastDigit = num % 10;
 
     rev = rev * 10 + lastDigit;
 
     num = Math.floor(num/10);
     
   }
 
   return rev;
   
 }
 
 
 console.log(revNumber(153));
 
 console.log(revNumber(326));
