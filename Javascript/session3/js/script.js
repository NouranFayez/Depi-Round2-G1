
// function statment
function getFullName() {
    return 'Nouran Fayez'
}

var userName = getFullName()


// function expression

var getUserName = function () {
    userName = 'zain'
    lastName = "fayez"
    return `${userName} ${lastName}`

}

// console.log(getUserName()) // zain fayez
// console.log(userName) // zain

// arrow function 
var sum = () => {
    var num = 30
    return num
}
var sum = () => 30


// console.log(sum())


// var userName = "Nouran"
// var userAddress = "Nasr city"
// var userAge = 30
// var Nationality = "Egyptian"
// var isGraduated = true

var userInfo = ["Nouran", "Nasr city", 30, true]


// console.log(userInfo[2])

// var age = userInfo[2]

// console.log(age)

userInfo[4] = "Egyptian"

// userInfo[10] = "Developer"

// console.log(userInfo.length)

userInfo[userInfo.length] = "Developer"

// console.log(userInfo)


/// Array Methods


var courses = ['Html', 'css', "js", "ts"]


// courses.unshift("prompt Engineering" , 'vgcvgc')
// courses.push("Bootstrap" , "Angular")

// courses.shift()
// courses.shift()

// courses.pop()


// console.log(courses)


// console.log(courses.includes("node"))


var courses = ['Html', 'css', "js", "ts"]



// var courseName = prompt('enter course name')


// console.log(courseName)
// console.log(courses.includes(courseName)) // true / false

// if(courses.includes(courseName)){
//     console.log('course found')
// }
// else {
//     courses.push(courseName)
//     console.log(courses)
// }


var ids = [1, 3, 4, 7]
console.log(ids)
// splice ==> index , deletedCount , item/s  ==> add / remove
ids.splice(1, 1) // remove item/s
console.log(ids)

// var courses = ['Html' , 'css' ,  "js" , "ts" , 'angular']
// console.log(courses)

// courses.splice(3 , 0 , 'Bootstrap' , 'node') // add item/s
// console.log(courses)

// courses.splice(2 , 2 , 'SCSS' , "UX Design") // add / remove : item/s
// console.log(courses)


// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])
// console.log(courses[4])
// console.log(courses[5])


for (var i = 0; i < courses.length; i++) {
    // console.log(courses[i])
}



courses.forEach((element, i, array) => {
    // console.log(element)
    // console.log(i)
    // // console.log(array)
    // if(element == 'ts') console.log(i)


})



// var gg = (item , i , arr)=>{
//     console.log(item)
//     console.log(i)
//     console.log(arr)
// }

// gg('html' , 10 , courses)






var nums = [5, 1, 10, 7, 9]

// console.log(nums.includes(10))

// var h = (item)=> item > 7

// var f = h(10) // true
// var f2 = h(5) // false
// console.log(f)
// console.log(f2)
var value = nums.find((item) => item > 7) // first element
var value2 = nums.find((ele) => ele > 200) // undefined
// console.log(value)
// console.log(value2)

var index = nums.findIndex((item) => item > 7) // first index
var index2 = nums.findIndex((item) => item > 200) // -1
// console.log(index)
// console.log(index2)

if (index2 == -1) nums.push(250)


nums.splice(index, 0, 4)

// console.log(nums)



var newArray = nums.filter(item => item > 7) // return array
var newArray = nums.filter(item => item > 300)

// console.log(newArray)

// -- reverse() -- map() -- slice() -- sort() ==> search

// var userName = "Nouran"
// var lastName = "Fayez"
// var userAddress = "Nasr city"
// var officeAddress = "October"
// var userAge = 30
// var Nationality = "Egyptian"
// var isGraduated = true

// var userInfo = ["Nouran", "Fayez" , "Nasr city", "October" ,  30, true]

var user = {
    userName : 'Nouran',
    lastName : 'Fayez' ,
    isGraduated : true ,
    address: 'Nasr city'
}


user.officeAddress = "October"

user.isGraduated = "graduated"


console.log(user)


var user2 = {
    userName : 'Tamer',
    lastName : 'Fayez' ,
    isGraduated : true ,
    address: 'Nasr city'
}

var user3 = {
    userName : 'Zain',
    lastName : 'Fayez' ,
    isGraduated : true ,
    address: 'Nasr city'
}

var user4 = {
    userName : 'Marwa',
    lastName : 'Fayez' ,
    isGraduated : true ,
    address: 'Nasr city'
}



// array of objects
var users = [
    {
        userName : 'Tamer',
        lastName : 'Fayez' ,
        isGraduated : true ,
        address: 'Nasr city'
    } ,
    {
        userName : 'Zain',
        lastName : 'Fayez' ,
        isGraduated : true ,
        address: 'Nasr city'
    } ,
    {
        userName : 'Marwa',
        lastName : 'Fayez' ,
        isGraduated : true ,
        address: 'Nasr city'
    }

]

console.log(users)

users.forEach(item=>{
    console.log(item)
})

var userIndex = users.findIndex(item => item.userName == 'Marwa')

console.log(userIndex)


users[userIndex].address = "october"

console.log(users)



/////////////////////////////////////////////////////////////

var users = []
// function addUser() ==> name , id, balance 


// function addUser(){

// }


// function EditUserBalanceById() ==> id , newBalance


// function deleteUserById() ==> id
