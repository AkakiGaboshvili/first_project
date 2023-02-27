

// function nums (){
//     for(var i = 0; i<=100; i++){ //var რომ დავწეროn let ის მაგივრად, console.log fuction -ის გარეთაც იმუშავებს მაგრამ სტრანნად :))
//         console.log(i);
//     }
// arr = [nums]
// max =100
// for (let index = 0; index ,arr.length; index++){
//     if (arr[index] === max){
//         index.push(index);
//     }
//     return -1
// }
// console.log(indexes);
// }
// return nums()

// //math.Max(indexOf(nums))

// const arr = [0, 100]
// const index = arr.indexOf(Math.max(...arr));
// console.log(index);


// let my_array = Array.from(Array(100), (_, index) => index + 1);

// const myInfo = {
//     userName: "akaki",
//     age: 35,
//     height: 187,
//     my_array: Array.from(Array(100), (_, index) => index + 1),
// }
// console.log(myInfo)
// function result(age, height) {
//     result = age + height
// }

// console.log(result.result);

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


