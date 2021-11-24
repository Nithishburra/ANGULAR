// functions
// functions is used to write the paricular business logic is called as functions...
// functions is used to reuse the business logic...
// the function without name is called anonymous functions..
// the function withoutname is also called as arrow functions..
// the arrow function is represented by using is =>
// this concept is introduced by ES6
/*
  //function defintion
  var/let/const variablename:datatype = (arg1:datatype,arg2:datatype,arg3:datatype,....argn:datetype):returntype =>{
      //business logic
  }
  
  //function calling

  variablename(param1,param2,parm3......paramn)

*/
/*
let fun_one = (arg1:string,arg2:String,arg3:string):any=>{
    console.log(arg1,arg2,arg3);
}

//fun_one();                                  //Expected 3 arguments, but got 0.
fun_one("hello_!","hello!!","hello !!!");          //hello_! hello!! hello !!!
fun_one("hi_1","hi_2","hi_3");                       //hi_1 hi_2 hi_3
//fun_one("hey","how","you","are");//Expected 3 arguments, but got 4





let fun_two =(arg1:number,arg2:number,arg3:string):any=>{
  console.log(arg1,arg2,arg3);
}

fun_two(1,2,"hi how ar u");                 //1 2 hi how ar u
fun_two(1,2,"hello");                      //1 2 hello

*/
/*
let fun_three = (arg1:any,arg2:any,arg3:any,arg4:any):any=>{
  console.log(arg1.msg,arg2.msg,arg3.msg,arg4.msg);
}

fun_three({"msg":"hello_1"},{"msg":"hello_2"},{"msg":"hello_3"},{"msg":"hello_4"});  //hello_1 hello_2 hello_3 hello_4
fun_three({},{},[],{}); //undefined undefined undefined undefined


let fun_four =(arg1:any,arg2:any,arg3:any):any=>{
  console.log(arg1.num,arg2,arg3);
}
fun_four([0,2,3],[2,5,6],[10,20,30]);                //[ 0, 2, 3 ] [ 2, 5, 6 ] [ 10, 20, 30 ]

*/
var callback = function (Posres, Errres) {
    console.log(Posres(), Errres());
};
callback(function () {
    return "hello_1";
}, function () {
    return "hello_2";
});
//hello_1 hello_2
var networkcall = function (successcallback, errorcallback) {
    console.log(successcallback(), errorcallback());
};
networkcall(function () {
    return "hi welcome to angular...!";
}, function () {
    return "bye";
}); //[Function (anonymous)] [Function (anonymous)]
//hi welcome to angular...! bye
var CallbackRes = function (test1, test2) {
    console.log(test1(), test2());
};
CallbackRes(function () {
    return "WELCOME ...!";
}, function () {
    return "BYE MAN..!";
});
//WELCOME ...! BYE MAN..!
var fun_five = function (arg1, arg2) {
    console.log(arg1, arg2);
};
fun_five("hello_1", 1000);
fun_five("hellop", 1111);
