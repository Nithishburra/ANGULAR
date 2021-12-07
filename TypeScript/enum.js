// if we want create our own datatype is called as enum...
//enum is the keyword
//enum is used to create custom datatype
//1) numeric enum
//2) string enum
//3) heterogenous enum
var corona;
(function (corona) {
    corona[corona["alfa"] = 0] = "alfa";
    corona[corona["beta"] = 1] = "beta";
    corona[corona["gama"] = 2] = "gama";
    corona[corona["delta"] = 3] = "delta";
    corona[corona["omicron"] = 4] = "omicron";
})(corona || (corona = {}));
console.log(corona);
console.log(corona.alfa, corona.beta, corona.gama, corona.delta, corona.omicron);
console.log(corona["alfa"], corona["beta"], corona["gama"], corona["delta"], corona["omicron"]);
console.log(corona[0], corona[1], corona[2], corona[3], corona[4]);
var europe;
(function (europe) {
    europe[europe["UK"] = 0] = "UK";
    europe[europe["LONDON"] = 1] = "LONDON";
    europe[europe["manncheter"] = 2] = "manncheter";
    europe[europe["southmpton"] = 3] = "southmpton";
    europe[europe["ireland"] = 4] = "ireland";
})(europe || (europe = {}));
console.log(europe);
console.log(europe.UK, europe.LONDON, europe.manncheter, europe.southmpton, europe.ireland);
console.log(europe["UK"], europe["LONDON"], europe["manncheter"], europe["southmpton"], europe["ireland"]);
console.log(europe[4], europe[3], europe[2], europe[1], europe[0]); //ireland southmpton manncheter LONDON UK
var enum1;
(function (enum1) {
    enum1[enum1["const_1"] = 100] = "const_1";
    enum1[enum1["const_2"] = 101] = "const_2";
    enum1[enum1["const_3"] = 102] = "const_3";
    enum1[enum1["const_4"] = 103] = "const_4";
    enum1[enum1["const_5"] = 104] = "const_5";
    enum1[enum1["const_6"] = 105] = "const_6";
})(enum1 || (enum1 = {}));
console.log(enum1);
var enum2;
(function (enum2) {
    enum2[enum2["const_1"] = 100] = "const_1";
    enum2[enum2["const_2"] = 200] = "const_2";
    enum2[enum2["const_3"] = 300] = "const_3";
    enum2[enum2["const_4"] = 400] = "const_4";
})(enum2 || (enum2 = {}));
console.log(enum2);
var enum3;
(function (enum3) {
    enum3[enum3["const_1"] = 100] = "const_1";
    enum3[enum3["const_2"] = 200] = "const_2";
    enum3[enum3["const_3"] = 400] = "const_3";
    enum3[enum3["const_4"] = 300] = "const_4";
})(enum3 || (enum3 = {}));
console.log(enum3);
var enum4;
(function (enum4) {
    enum4[enum4["const_1"] = 10] = "const_1";
    enum4[enum4["const_2"] = 20] = "const_2";
    enum4[enum4["const_3"] = 120] = "const_3";
    enum4[enum4["const_4"] = 220] = "const_4";
})(enum4 || (enum4 = {}));
console.log(enum4);
function fun_one() {
    return 100;
}
var enum5;
(function (enum5) {
    enum5[enum5["const_1"] = fun_one()] = "const_1";
    enum5[enum5["const_2"] = enum5.const_1 * 2] = "const_2";
    enum5[enum5["const_3"] = enum5.const_2 + 100] = "const_3";
    enum5[enum5["const_4"] = enum5.const_3 + 100] = "const_4";
})(enum5 || (enum5 = {}));
console.log(enum5);
var enum6;
(function (enum6) {
    enum6[enum6["const_2"] = 0] = "const_2";
    enum6[enum6["const_3"] = 1] = "const_3";
    enum6[enum6["const_1"] = fun_one()] = "const_1";
})(enum6 || (enum6 = {}));
console.log(enum6);
function fun_two() {
    return 50;
}
var enum7;
(function (enum7) {
    enum7[enum7["const_1"] = fun_two()] = "const_1";
    enum7[enum7["const_2"] = fun_two() + 50] = "const_2";
    enum7[enum7["const_3"] = enum7.const_2 * 100] = "const_3";
})(enum7 || (enum7 = {}));
console.log(enum7);
var enum8;
(function (enum8) {
    enum8[enum8["const_1"] = 0] = "const_1";
    enum8[enum8["const_2"] = 1] = "const_2";
    enum8[enum8["const_3"] = fun_two()] = "const_3";
})(enum8 || (enum8 = {}));
console.log(enum8);
(function (enum8) {
    enum8[enum8["val_1"] = 100] = "val_1";
    enum8[enum8["val_2"] = 101] = "val_2";
    enum8[enum8["val_3"] = 102] = "val_3";
    enum8[enum8["val_4"] = 103] = "val_4";
})(enum8 || (enum8 = {}));
function fun_three() {
    return enum8.val_1;
}
console.log(fun_three());
//100
//string enum
// for string enum initialization is mandatory..
var enum9;
(function (enum9) {
    enum9["val1"] = "hello_1";
    enum9["val2"] = "hello_2";
    enum9["val3"] = "hello_3";
    enum9["val4"] = "hello_4";
})(enum9 || (enum9 = {}));
console.log(enum9);
console.log(enum9.val1, enum9.val2, enum9.val3, enum9.val4);
console.log(enum9["val1"], enum9["val2"], enum9["val3"], enum9["val4"]);
console.log(enum9[0], enum9[1], enum9[2], enum9[3]);
console.log(Object.keys(enum9));
/*
enum enum10{
    val_1 = "hey",
    val_2,
}                                   //Enum member must have initializer
*/
//heterogeneous enum
//enum string + enum number is called as heterogenous
var enum11;
(function (enum11) {
    enum11[enum11["VAL_1"] = 100] = "VAL_1";
    enum11["VAL_2"] = "WELCOME";
})(enum11 || (enum11 = {}));
console.log(enum11);
