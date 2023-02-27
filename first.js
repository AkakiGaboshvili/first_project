
// let nums = [42 , 51, 24, 98, 65, 12];

// let result = nums.filter( n => n%2===0)
//     .map( n => n*2)
//     .reduce((a,b) => a+b );

// console.log(result);

// let nums = new Set();
// nums.add(3);
// nums.add(4);
// nums.add(5);
// nums.add("akaki");
// nums.add("gab");
// nums.add("tasik");


// nums.forEach(value=>{
//     console.log(value)
// });

// let map = new Map();
// map.set("ako","java");
// map.set("taso", "designer");
// map.set("teo", "developer");
// map.set("ako", "developer")

// map.forEach((key,value)=>{
//     console.log(key, value);
// })
// let num = 1
// function show(){
//     console.log("hi",num);
//     num++;
//     show()
    
// }
// show();

// function square(number){
//     return number * number;
// }

// console.log(square(4));

// let someVar = "Hat";
// function myFun() {
//     let someVar = "shoes";
//     console.log(someVar);

// }
// myFun();
// console.log(someVar);



// function addSquares(a , b) {
//     function square(x){
//         return x * x * x;
//     }
//     return square(a) + square(b);
// }
// a = addSquares(2 , 3); 
// b = addSquares(3 , 4);
// c = addSquares(4 , 5);

// console.log(a)


function gamotvla(a , b , c){
    function kvadrati(x){
        return x * x;
    }
    gamotvla (3 , 5 , 2)
    return gamotvla(a) + gamotvla(b) + gamotvla(c);
}


cal = gamotvla(3 ,5, 2);

console.log(cal);