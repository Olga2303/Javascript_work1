//Задание 1//
let min = 17;

if (min >= 0 && min <= 14) {
    console.log('первая четверть');
}

if (min >= 15 && min <= 30) {
    console.log('вторая четверть');
}

if (min >= 31 && min <= 45) {
    console.log('третья четверть');
}

if (min >= 46 && min <= 60) {
    console.log('четвертая четверть');
}

//Задание 2//

let num = 2;

switch (num) {
    case 1:
       console.log('лето');
        break;
    case 2: 
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('осень');
        break;   
    default:
        console.log('межсезонье');
        break;
}

//Задание 3//

let sum = 0
    for (let x = 0; x < 100; x++)
    if(sum += x); {
        console.log(sum); 
    }
    
//Задание 4//
let number1 = prompt ('Введите число');
console.log(number1);


if (number1 == 1) {
    console.log('нечетное');
} else if (number1 == 2) {
    console.log ('четное');
} else if (number1 == 3) {
    console.log ('нечетное');
} else console.log ("максимальное");


//Задание 5//
let z = 4;
let y = 9;
const r = 10;

let result = Math.sqrt (z*z + y*y); {
    console.log(result);
}
if (result<r) {
    console.log ('точка входит в окружность')
}
if (result>r) {
    console.log ('точка не водит в окружность')
}

//Задание 6//

for (let i = 1 ; i < 3; i++){
    if (i++) {
        console.log(`*`)
        console.log (`***`);
        console.log (`*****`);
        console.log (`*******`);
        console.log (`*********`);
        console.log (`***********`);
    }
}




