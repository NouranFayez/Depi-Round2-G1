/// var , let , const 
// hoisting
// let , const ==> block scoped
// var ==> global , function scoped

var fName


console.log(fName) // undefined
var fName = "Nouran"


// console.log(familyName) // error
// let familyName = "Fayez"

let x = "text"
function getName (){
    var lName = "Ahmed"
    let userAddress = "nasr city"
    if(true){
        var fullName = "Ahmed mohamed"
        let userName = "zain"
        let userAddress = "october"
        console.log(userAddress)
        console.log(x)
    }
    console.log(userAddress)
    // console.log(fullName)
    // console.log(userName)
}

// getName()

let userAge = 30
 userAge = "bhfbhfbf"

 var userJob = "developer"
 var userJob = "Engineer"
 userJob = true
//  console.log(userJob)

//  const isGraduated = true
//   isGraduated = false

//  console.log(userAge)
//  console.log(isGraduated)



// Elements Relationship
let ulElements = document.getElementsByTagName('ul') 

console.log(ulElements)

console.log(ulElements[0].firstElementChild)
ulElements[0].firstElementChild.innerText = "Depi - Cls - Frontend"
ulElements[0].lastElementChild.innerText = "Depi - Cls - Frontend"
let ulChildren = ulElements[0].children
for (let i = 0; i < ulChildren.length; i++) {
   ulChildren[i].style.fontSize = "30px"
    
}

let li = document.querySelector('#custom-li')

li.parentElement.style.backgroundColor = "lightgray"
li.nextElementSibling.style.color = "blue"
li.previousElementSibling.style.color = "red"


let div = document.getElementById('div-container')

// div.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium.</p>"

// div , h2 , p 

let card = document.createElement('div')
let h2 = document.createElement('h2')
let p = document.createElement('p')

h2.innerText = "Lorem, ipsum dolor."
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum et aut quisquam recusandae aliasdeserunt minus nesciunt doloremque suscipit."

card.append(h2)
// card.prepend(p)
card.append(p)
card.classList.add('card')

console.log(card)

div.append(card)


