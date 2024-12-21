
let myForm = document.getElementById('myForm')

let nameValidation = (element) => {
    console.log(element.value.length)

    let elementValue = element.value.trim()

    if (elementValue.length < 3) {
        handleError(element, "please enter at least 3 character")
    }

    else {
        handleError(element)
    }
}

let handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
    input.nextElementSibling.style.color = 'red'
}

let emailValidation = (element) => {

    let inputValue = element.value

    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regExp.test(inputValue));

    (regExp.test(inputValue))
        ? handleError(element)
        : handleError(element, 'please a valid email');

}

myForm.addEventListener('input', function (e) {
    // console.log(e)
    if (e.target.id == 'userName') {
        nameValidation(e.target)
    }
    else if (e.target.id == 'userEmail') {
        emailValidation(e.target)
    }
})


// name ==> 3 letters
// email ==>  userName@domain.subdomain
// password ==> uppercase letter , lowercase letter , number , special character (!@#$%^&*)
// reg Exp of password ==> https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/


let handleRefresh = () => {
    // window.location.reload()
    console.log(window.location.href)
    // 'https://www.w3schools.com/tags/att_input_pattern.asp'
    location.hostname
    // 'www.w3schools.com'
    location.pathname
    // '/tags/att_input_pattern.asp'
}