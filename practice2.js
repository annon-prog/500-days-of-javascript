//Day one practice:Add spacing to a sentence

function addedSpace(spacing){
    let addSpace=spacing.join('').split(' ');
    return addSpace;
}
let newSpace= addedSpace(Iloveyou);
console.log(newSpace);

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
