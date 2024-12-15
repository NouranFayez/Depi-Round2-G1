let form = document.getElementById('myForm')
let table = document.querySelector('#table-id')

let users = []

function addUser(parent) {
    let user = {
        name: parent.userName.value,
        ID: parent.userID.value,
        balance: parent.userBalance.value,
    }
    users.push(user)
    console.table(users)


}

function showUsers() {
    //     <tr>
    //     <td>user name</td>
    //     <td>user id</td>
    //     <td>user balance</td>
    // </tr>
    table.textContent = ""
    users.forEach((item, i, arr) => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let editBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')
        editBtn.innerText = "Edit user Balance"
        deleteBtn.innerText = "Delete User"

        td4.append(editBtn)
        td4.append(deleteBtn)
        td1.innerText = item.name
        td2.innerText = item.ID
        td3.innerText = item.balance
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        table.append(tr)


    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userID.value)
    console.log(e.target.elements.userBalance.value)
    // addUser(e.target.elements.userName.value , e.target.elements.userID.value , e.target.elements.userBalance.value )
    addUser(e.target.elements)
    showUsers()
})



// localStorage.setItem("userName"  , "Tamer")

usersArray = [
    {name : 'zain' , id: 2 , balance : 2000},
    {name : 'tamer' , id: 2 , balance : 2000},
]

// localStorage.removeItem('userName')

// json ==> javascript object notation

// let usersArrayToString = JSON.stringify(usersArray)

// // console.log(usersArrayToString)

// localStorage.setItem('usersInfo' , usersArrayToString)

// console.log(localStorage.getItem('usersInfo'))

// let usersReturnFromLocalstorage = JSON.parse(localStorage.getItem('usersInfo'))

// usersReturnFromLocalstorage.push({name: 'nouran' , id:4 , balance:200})

// console.table(usersReturnFromLocalstorage)

// console.log(localStorage.getItem('address'))


// sessionStorage.setItem('user' , 'nouran')
// sessionStorage.removeItem('user')
// sessionStorage.getItem('user')


let tabs = document.getElementsByClassName('tabs-content')

function handleShowTab(elementId){
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active') 
    }
    let element = document.getElementById(elementId)
    element.classList.add('active')

}



//  write less do more
// $(".owl-carousel")
document.querySelector('.owl-carousel')



// https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html





