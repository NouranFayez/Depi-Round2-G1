// let x : string
// x = "str"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Info = /** @class */ (function () {
    function Info(fName, lName, age, job, ssn) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.job = job;
        this.ssn = ssn;
    }
    Info.prototype.getName = function () {
        console.log(this.job);
        return "".concat(this.fName, " ").concat(this.lName);
    };
    Object.defineProperty(Info.prototype, "_job", {
        get: function () {
            return this.job;
        },
        enumerable: false,
        configurable: true
    });
    return Info;
}());
var u = new Info('tamer', 'ahmed', 20, "developer", "P0106");
u.fName = "Zain";
console.log(u);
// u.age = 10
// console.log(u.age)
// console.log(u.getName())
// console.log(u._job)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fName, lName, age, job, ssn, address, x) {
        var _this = _super.call(this, fName, lName, age, job, ssn) || this;
        _this.address = address;
        _this.x = x;
        return _this;
    }
    Employee.prototype.getName = function () {
        return _super.prototype.getName.call(this) + " inside child class";
    };
    return Employee;
}(Info));
var emp = new Employee('ahmed', 'fayez', 70, 'engineer', "P0106", 'nasr city', 'ay 7aga');
// console.log(emp.getName())
console.log(emp);
var Y = /** @class */ (function () {
    function Y(name) {
    }
    return Y;
}());
var b = new Y('nouran');
