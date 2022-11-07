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