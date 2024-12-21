// let x = {
//     name : "nouran",
//     address : "nasr city"
// }


// closure 

let myFunc = (val, lName) => {
    return {
        fName: "Nouran",
        val,
        lName,
        add: function () {
            return val + 20
        }
    }
}


// console.log(myFunc(10 , "fayez"))
// console.log(myFunc(10).add())



////// callBack 

let arr = ['html', 'css', 'js']

arr.forEach((item, index, arr) => {
    console.log(item)
})

// let num = 5
// setTimeout(() => {
//         if(num > 5) console.log('greater than 5')
//             else console.log('less than')
// }, 2000);


// const myCallBk = (num )=>{
//     setTimeout(() => {
//         if(num > 10 ) return "greater than 10"
//         else return 'less than'
//     }, 3000);
// }

// console.log(myCallBk(15))

// const myCallBk = (num , cb )=>{
//         setTimeout(() => {
//             if(num > 10 )  cb("greater than 10" , true)
//             else  cb('less than' , false)
//         }, 3000);
//     }

// myCallBk(15 , (result , flag)=>{
//     console.log(result , flag)
// } )  



////// promise  ==> response , reject

let d = new Date()

// const myPromise = (val) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (typeof val == 'number') res(val * 2)
//             else rej('not a number')
//         }, 2000);
//     })
// }

// console.log(myPromise(10))

/// promise ==> then .catch /// async await
// myPromise(10).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


// setTimeout(() => {
//     console.log('js')
// }, 5000);

// console.log('after setTime Out')


////// error handling
// try {
//     console.log('html')
//     console.log('css')
//     console.log(address)
//     console.log('Js')

// }
// catch (e) {
//     console.log(e.message)
// }

// console.log('vgdvhcbfhbfvj bvjj')


const myPromise = (val) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof val == 'number') res(val * 2)
            else rej('not a number')
        }, 2000);
    })
}

    const myPromiseFunc = async ()=>{
        try{
            promiseVariable = await myPromise(10)

            promiseVariable2 = await myPromise(40)


            console.log(promiseVariable)
            console.log(promiseVariable2)

        }
        catch(e){
            console.log(e)

        }
}

myPromiseFunc()





// console.log(data)



const myUserApi = async()=>{
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/users")
        let usersData = await data.json()
        console.log(data)
        console.log(usersData)
    }
    catch(e){
        console.log(e)
    }
}

myUserApi()













