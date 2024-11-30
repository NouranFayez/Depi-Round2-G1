var num = 30;
var str = "text";


// typeof(variable)
// typeof variable
// console.log(typeof(num))
// console.log(typeof str)

// console.log(typeof str  == 'boolean')


// console.log(typeof num == 'number')
// console.log(typeof str == 'string')
// console.log(num > 10)


// console.log(typeof num == 'number' && typeof str == 'boolean' && num > 20) // true , false , true ==> false
// console.log(typeof num == 'number' && typeof str == 'string' && num > 20) // true , true , true ==> true

// console.log(str == 'lorem' || typeof str == 'string') // false , true ==> true
// console.log(str == 'lorem' || typeof str == 'number') // false , false ==> false

// console.log(!num > 10)

// ternary operator ==> (condition) ? true : false 


var str = "text";
// (typeof num == 'number' && typeof str == 'boolean' && num > 20) ? console.log('correct') : console.log('wrong') ;
// (typeof num == 'number' && typeof str == 'string' && num > 20) ? console.log('correct') : console.log('wrong') ;


var test = 10;
var test = 0; // false
var test = ""; // false
var test = "vjvhvhv"; // true
var test = null; // false 
var g // false
var k = g / 10 //NaN ==> Not a Number :  false
// -0 ==> false 

// (test) ? console.log('true') : console.log('false')

// console.log(k);

// (k) ? console.log('true') : console.log('false') ;

var text = "lorem";

// (!text) ? console.log('true') : console.log('false') ;

//// if condition

// if(condition){
//     true code
// }
// else {
//     false code
// }


var address = "Nasr city"

if (address == 'Nasr city') {
    var result = 'correct'
    // console.log(result)
}
else {
    // console.log('wrong')
}

// return ==> string | null
// var fName = prompt("enter your name")


// console.log(fName)


// var course = prompt('enter course name')

// if (course == 'js' || course == 'javascript') console.log('js')
// else if (course == 'html') console.log(course)
// else if (course == 'css') console.log(course)
// else if (course == 'ts') console.log(course)
// else console.log('invalid course')

// var sum = "5"

// if(typeof sum == 'number'){
//     if(sum > 10) console.log('greater than 10')
//     else console.log('less than')
// }
// else console.log('invalid number')


// prompt() ==> "" , "string" , null



////////// switch case

// variable 
// switch(variable){
//     case 
//     default
// }


// var j = "20"
// var h = 20

// strict condition (===) value - data type
// var job = "20"

// switch(job){
//     case "20" : 
//     case 20 :
//         console.log('number = 20')
//         break
//     case 'eng' :
//     case 'engineer' :
//          console.log('engineer')
//          break
//     case 'doc' :
//          console.log('doctor')
//          break
//     case 'dev' :
//          console.log('developer')
//          break
//     default : console.log('invalid job')
// }


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// looping
// for , while , do-while (search)

// for looping

// for(variable ; condition ; increment/decrement){
//     code .
// }



var n = 1
var n2 = "10"

// for (var i = n; i <= n2; i++) {
//     if (i == 8) break
//     else if (i == 2) continue
//     else console.log(i)
// }


/////////////////// while
// variable 
// while(condition){
//     code ...


//     increment++
// }


// var h = 1
// while (h <= 10) {
//     prompt(h)
//     h++
// }

var num1 = 2
var num2 = 3


// function sumNumbers(num1  , num2 , num3 = 60){
//     // console.log(num3)
//     var n1 = num1
//     var n2 = num2

//     var sum = n1 + n2 + num3
//     console.log(sum)
// }

// // prompt()

// sumNumbers(10 , 20)
// sumNumbers(100 , 20)
// sumNumbers(10 , 660)
// sumNumbers(200 , 20)
// sumNumbers(num1 , num2)
// sumNumbers()

// prompt("enter your name" , "Nouran")


// function prompt(message = "")


function getFullName (){
    var fName = prompt('enter your first name')
    var lName = prompt('enter your last name')
    //  fullName = `${fName} ${lName}`
    // console.log(fullName)
    
    // return `${fName} ${lName}`
    // return `Javascript`
    var f = `${fName} ${lName}`
    return f
}

// getFullName()

var fullName = getFullName()
var fullName2 = getFullName()

console.log(fullName)
console.log(fullName2)

// var p = prompt()


// function num()  

// function loopingIteration()
