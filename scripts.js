const CONNECT = "Je suis connecté";
console.log(CONNECT);
const inputYear = '1991';

// type conversions
///////////////////
// Convertir number:
console.log(Number(inputYear), typeof(Number(inputYear)));
// Convertir en string
console.log(String(inputYear), typeof(String(inputYear)));

//type coercion conversions
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / 2);
console.log('23' * 2);

// 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined)); 
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let height = 0;
if (height){
    console.log("height is " + height);
}else{
    console.log("pas de height");//le zéro est falsy
}







