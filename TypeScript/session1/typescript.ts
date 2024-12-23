// let x : string
// x = "str"

// let y : string = "text";

// // let p : string | null = prompt('enter your name')

// let JS_p : any = prompt('dfghj')

// console.log(JS_p)

// let eleme :any = document.getElementById('gghhh')
// eleme.style.color = "red"


// let myFunc = (num:number , name : string) : string=>{
//     console.log(num)

//     return `Welcome ${name}`
// }

// console.log(myFunc(20 , 'Nouran'))

/////// rest parameters ==> array
// let getNumbers = (...nums : any[])=>{
//     console.log(nums[0])
//     console.log(nums[1])
//     console.log(nums[2])
//     console.log(nums[3])
// }

// getNumbers(10 , 30 ,false , 100, "str" ,true )
// getNumbers(10 , 30 ,40 , 100, 60 ,20 )


// type x = string

// let fName : x = "nouran"


// type PersonalInfo ={
//     name : string ,
//     age : number
// }

// type AddressInfo ={
//     address : string
// }

// let userInfo : PersonalInfo={
//     name : "nouran",
//     age : 30
// }

// let user : PersonalInfo & AddressInfo={
//     name:'cghh',
//     age:20,
//     address : 'Nasr city'
// }
// console.log(userInfo)



// interface data {
//     name : string,
//     age : number
// }
// interface data2 extends data {
//     address : string
// }

// let user : data ={
//     name:'dfg',
//     age:20
// }

// console.log(user)

// let user : data2 = {
//     name: 'fh',
//     age : 20 ,
//     address : "nasr city"
// }



// class UserInfo{
//     fName : string  
//     lName : string  
//     id: number 
//     address = "nasr city"
//     constructor(fname : string , lName : string , id : number){
//         this.fName = fname
//         this.lName = lName
//         this.id = id
//     }

// }
// let user = new UserInfo("asd" , "fgh" , 1)
// let user2 = new UserInfo("zain" , "tamer" , 1)

// console.log(user)
// console.log(user2)

// let d = new Date()
// d.getFullYear()

// function getName (){

// }

/// access modifier ==> public , private protected , readonly

class Info {
    public fName : string 
    public lName : string
     readonly age : number
     private job : string
     protected ssn : string
     constructor(fName : string , lName : string , age : number , job : string , ssn:string){
         this.fName = fName
         this.lName = lName
         this.age = age
         this.job = job
         this.ssn = ssn
     }
     getName () : string{
         console.log(this.job)
         return `${this.fName} ${this.lName}`
     }
     get _job (){
         return this.job
     }
 }
 let u = new Info('tamer' , 'ahmed' , 20 , "developer" , "P0106")
 u.fName = "Zain"
 console.log(u)
 // u.age = 10
 // console.log(u.age)
 // console.log(u.getName())
 // console.log(u._job)
 
 class Employee extends Info{
     address : string
     protected x : string
     constructor(
     fName : string 
     , lName : string ,
      age : number , 
     job : string ,
      ssn:string ,
      address:string ,
      x : string){
         super(fName ,lName , age , job , ssn)
         this.address = address
         this.x = x
     }
 
     getName(){
         return super.getName()+ " inside child class"
     }
 }
 
 
 let emp = new Employee('ahmed' , 'fayez' , 70 , 'engineer' , "P0106" , 'nasr city' , 'ay 7aga')
 // console.log(emp.getName())
 
 console.log(emp)
 
 
 class Y {
     
     constructor(name:string){}
 }
 
 let b = new Y('nouran')
 
 
 
 
 
 
 
 
 
 