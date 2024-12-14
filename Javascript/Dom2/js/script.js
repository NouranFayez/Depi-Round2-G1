

function handleInput(ele){
    console.log(document.getElementsByTagName('input'))
    console.log(ele.value)
}


var customInput = document.getElementById('custom-input')

// var userInfo = function(){

// }

customInput.addEventListener('input' , function(e){
    console.log(customInput.value)
    console.log(e.target.value)
})
customInput.addEventListener('change' , function(e){
    console.log(`input value = ${e.target.value}`)
})

var customSelect = document.querySelector('#custom-select')
customSelect.addEventListener('change' , function(e){
    console.log(e.target.value)
})

var myForm = document.getElementById('myForm')

myForm.addEventListener('input' , function(e){
    console.log(e.target.value)
})

myForm.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
})

var customDiv = document.querySelector('.custom-div')

customDiv.addEventListener('scroll' , function(eve){
    console.log(eve.target.scrollTop)
})


// Dom ==> document object model
// Bom ==> browser object model

var topArrow = document.querySelector('#topBtn')

window.addEventListener('scroll' , function(){
    // console.log(this)
    console.log(this.document.documentElement.scrollTop)
    if(this.document.documentElement.scrollTop > 400){
        topArrow.style.display = "block"
    }
    else  topArrow.style.display = "none"

})

// var sum = ()=>{
//     console.log(this)
// }

setTimeout(()=>{
    console.log('js')
} , 5000)

setTimeout(() => {
        console.log('css')
}, 2000);

console.log('html')

var customSet = setInterval(() => {
    // console.log('set interval')
}, 500);
console.log(customSet)

var counter = document.getElementById('counter')
var i = 50

counter.innerText = i

var set = setInterval(()=>{
    counter.innerText = i

    if(i == 100) {
        clearInterval(set)
        console.log('-------------- 100 ---------------------')
    } 
    // i++
    i+=10
    // console.log(i)
} , 100)

console.log(set)



