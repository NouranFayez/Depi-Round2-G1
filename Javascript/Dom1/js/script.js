// Dom ==> Document object model


console.log(document.getElementById("h1Element")) // return object
var h1Element = document.getElementById('h1Element')
h1Element.innerText = "JAvascript"
h1Element.title = "JAvascript"

var h2Tags = document.getElementsByTagName('h2') // return htmlCollection

console.log(h2Tags)

h2Tags[1].innerText = "Javascript"


for(var i = 0 ; i < h2Tags.length ; i++){
    h2Tags[i].innerText = " Frontend"
}


// var obj = {
//     h2Element : {
        
//     }
// }


var classElement = document.getElementsByClassName('classElement') // return htmlCollection
console.log(classElement)

var querySelector = document.querySelector(".classElement .custom-link")
var querySelectorAll = document.querySelectorAll(".classElement .custom-link")

console.log(querySelector) // return object
console.log(querySelectorAll) // return NodeList

// .classElement .custom-link{

// }



var h1Element = document.getElementById('h1Element')

// h1Element.style.color = "red"
// h1Element.style.backgroundColor = "lightgray"
// h1Element.style.padding = "2%"


h1Element.classList.add('custom-h1-style' , 'bg-light' , 'custom-margin')
h1Element.classList.remove('d-flex')
h1Element.classList.toggle('justify-content-center')

console.log(document.title)

// var img = document.getElementById('custom-img')
var img = document.querySelector('#custom-img')

console.log(img)
img.width = '500'

console.log(document.images)
console.log(document.forms)
console.log(document.links)
console.log(document.scripts)



function changeImage(num){
    var img = document.querySelector('#custom-img')
    img.src = "images/s2.jpg"
    img.src = "https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"
}

console.log(document.getElementsByClassName('customClass'))

function changeDivBgColor (element){
    element.style.backgroundColor = 'darkgoldenrod'
    element.children[0].innerText = "Javascript"
}
