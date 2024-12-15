
var fName = "Ahmed"
var lName = "Mohamed"
var user ={
    fName : "Nouran",
    lName : "Fayez",
    fullName : function(){
        // var fName = "Zain"
        return `${this.fName} ${user.lName}`
    },
    addresses : function(){
        return {
            homeAddress : "Nasr city",
            officeAddress : "October"
        }
    }

}


// console.log(user.fullName())

// console.log(user.addresses().officeAddress)

/////////////////////// string Methods 

var str = "             lorem lorem  ipsum                "

str = str.trim()

// console.log(str.trim())
// console.log(str.replace("lorem" , "Html"))
// console.log(str.replaceAll("lorem" , "Js"))

/// slice , startsWith , endsWith , uppercase , lowerCase 

var str2 = "html"
// console.log(str2[0])
// console.log(str2.length)


///// numbers Methods


// var p = prompt('enter number')

// console.log(+p)
// console.log(parseInt(p))
// console.log(parseFloat(p))

// var num = 30

// console.log(isNaN(num))
// var txt = "lorem"
// console.log(isNaN(txt))

console.log(Math.random()*100)
// Math.abs()
// Math.round()
// Math.ceil()
// Math.floor()
// Math.max()
// Math.min()
// Math.trunc()


var d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getHours())

//// Date Methods ==> search





