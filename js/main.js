let age = 19;


function judgeMinor(age){
    if(age >= 20){
        return "あなたは" + age + "才ですね。タバコが購入できます" 
    }else{
        return "あなたは" + age + "才ですね。タバコが購入できません" 
    }
}

console.log(judgeMinor(10));



let score = 4000;


const fruits = ["apple","grape","banana","lemon","strawberry"]

fruits.unshift('pier');
fruits.push('pineapple');

fruits[1]  = "佐々木";
const value = fruits[fruits.length-2]

console.log(fruits);
console.log(value);


var array = [1,2,3,4,5,6,7];
array.unshift(4444);
var len = array.length;
// array[5]  = 2000;
// array[6]  = 7000;


var value2  = [array.length -0];

console.log(len);
console.log(array);
console.log(value2);


const clothing = ['shoes', 'shirts', 'socks', 'sweaters', 'sex'];
console.log(clothing.length);





