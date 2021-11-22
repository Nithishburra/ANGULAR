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
var sub_one = "ANGULAR13";
var sub_two = "NODE JS";
var sub_three = "VUE JS";
var mean = "mean stack development=>" + sub_one + "---" + sub_two + "---" + sub_three;
console.log(mean);
var var_one = "hello_1";
var var_two = "hello_2";
var var_three = "hello_3";
var var_four = "welcome to => " + var_one + "---" + var_two + "---" + var_three;
console.log(var_four);
var var_five = 100;
var var_six = 10.0;
console.log(var_five, var_six);
//number
var decimalnum = 200;
var doublenum = 10.32;
var hexadecimalnum = 0x123ABC;
var octalnum = 83;
var binarynum = 10;
console.log(decimalnum, doublenum, hexadecimalnum, octalnum, binarynum);
//boolean 
var flag = true;
var flag1 = false;
var flag2 = false;
console.log(flag, flag1, flag2);
//any
var data = {};
var data1 = [];
// Arrays
//String arrays
var arr1 = ["hello_1", "hello_2", "hello_3", "hello_4"];
var arr2 = ["hello_1", "hello_2", "hello_3", "hello_4"];
var arr3 = ["welcome to TS"];
var arr4 = ["hi_1", "hi_2", "hi_3"];
console.log(arr1, arr2, arr3, arr4);
//number array
var arr5 = [10, 20, 30, 40, 50, 60, 70, 80];
var arr6 = [100, 200, 300, 400, 500, 600, 700, 800];
var arr7 = [74, 85, 96, 41, 52, 63];
var arr8 = [10, 20, 30, 40, 50, 60, 70];
console.log(arr5, arr6, arr7, arr8);
//boolean array
var arr9 = [true, false, false, true, true, false, true];
var arr10 = [false, true, true, false, true, false];
var arr11 = [true, false, false, true, false];
var arr12 = [false, true, false, true, false];
console.log(arr9, arr10, arr11, arr12);
//JSON
// the default datatype of json is ANY
var obj = {
    "sub_one": "angular",
    "sub_two": "js",
    "sub_three": "NODEjs"
};
console.log(sub_one, sub_two, sub_three);
var obj1 = [
    { "msg": "hello_1" },
    { "msg": "hello_2" },
    { "msg": "hello_3" },
    { "msg": "hello_4" },
    { "msg": "hello_5" },
    { "msg": "hello_6" },
    { "msg": "hello_7" },
];
console.log(obj1);
var v1 = undefined;
var v2 = undefined;
var v3 = undefined;
var v4 = null;
var v5 = null;
console.log(v1, v2, v3, v4, v5);
var arg1 = "hello";
arg1 = "true";
console.log(arg1);
var arg2 = true;
arg2 = "hi";
arg2 = 500;
console.log(arg2);
var arg3 = 100;
arg3 = "hi welcome";
console.log(arg3);
