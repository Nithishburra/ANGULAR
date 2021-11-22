//variables 
// it is used to store the data..
//ex.  String data , number data, boolean data, objects, arrays............
//we can declare the variables by using the keywords they are
// 1) let    (ES6) (ES-2015)
// 2) const   (ES6)
// 3) var

// variables should contain a-z, A-Z, 0-9, $, and _
// varibales should not start with the digits...

/*
Syntax
********
 let variablename:datatype = value;

 */


// String
//we can represent the String in three ways  "", '' , ` `
//`` (backtick) operator is introduced in the ES6 version.
//`` (backtick) it is also called as template literal.
//`` (backtick) it is also used to define the 'multiline Strings'.

var msg = "welcome to ts";
console.log(msg);

 let sub_one:String = "ANGULAR13";
 let sub_two:String = "NODE JS";
 let sub_three:String = "VUE JS";
 let mean:String = `mean stack development=>${sub_one}---${sub_two}---${sub_three}`;
 console.log(mean);


 let var_one:String ="hello_1";
 let var_two:String = "hello_2";
 let var_three:String = "hello_3";
 let  var_four:String = `welcome to => ${var_one}---${var_two}---${var_three}`;
 console.log(var_four);



 let var_five:number = 100;
 let var_six:number = 10.0;
 console.log(var_five,var_six);


//number
 let decimalnum:number = 200;
 let doublenum:number = 10.32;
 let hexadecimalnum:number = 0x123ABC;
 let octalnum:number = 0o123;
 let binarynum:number = 0b1010;
 console.log(decimalnum,doublenum,hexadecimalnum,octalnum,binarynum);


//boolean 
 let flag:boolean = true;
 let flag1:boolean = false;
 let flag2:boolean = false;

 console.log(flag,flag1,flag2);


 //any
 let data:any ={};
 let data1:any =[];


 // Arrays
 //String arrays
 let arr1:string[] = ["hello_1","hello_2","hello_3","hello_4"]
 let arr2:Array<string> = ["hello_1","hello_2","hello_3","hello_4"]


 let arr3:string[] = ["welcome to TS"]
 let arr4:Array<string> = ["hi_1","hi_2","hi_3"]

 console.log(arr1,arr2,arr3,arr4);

 //number array
 let arr5:number[] = [10,20,30,40,50,60,70,80]
 let arr6:number[] = [100,200,300,400,500,600,700,800]
 let arr7:Array<number>=[74,85,96,41,52,63]
 let arr8:Array<number>=[10,20,30,40,50,60,70]
 console.log(arr5,arr6,arr7,arr8);

 //boolean array
 let arr9:boolean[] = [true,false,false,true,true,false,true]
 let arr10:Array<boolean> = [false,true,true,false,true,false]

 let arr11:boolean[] = [true,false,false,true,false]
 let arr12:Array<boolean> = [false,true,false,true,false]

 console.log(arr9,arr10,arr11,arr12);


 //JSON
 // the default datatype of json is ANY

 let obj:any ={
     "sub_one":"angular",
     "sub_two":"js",
     "sub_three":"NODEjs",
 };

console.log(sub_one,sub_two,sub_three);


 let obj1:any[]=[
         {"msg":"hello_1"},
         {"msg":"hello_2"},
         {"msg":"hello_3"},
         {"msg":"hello_4"},
         {"msg":"hello_5"},
         {"msg":"hello_6"},
         {"msg":"hello_7"},
 ]

 console.log(obj1);




let v1:undefined = undefined;
let v2:undefined = undefined;

let v3:undefined = undefined;

let v4:null = null;
let v5:null = null;

console.log(v1,v2,v3,v4,v5);




//unions
let arg1:string|boolean ="hello";
 arg1 = "true";
 console.log(arg1);




 let arg2:number|boolean|string =true;
 arg2="hi";
 arg2=500;
 console.log(arg2);




let arg3:string|number = 100;
arg3="hi welcome";
console.log(arg3);































