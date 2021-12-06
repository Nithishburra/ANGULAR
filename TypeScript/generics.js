function fun_one(arg1, arg2) {
    console.log(arg1, arg2);
}
fun_one("hello_1", "hello_2"); //hello_1 hello_2
fun_one(10, 20); //10 20     
fun_one(true, false); //true false
function fun_two(arg1, arg2) {
    console.log(arg1, arg2);
}
fun_two("welcome-1", "welcome-2"); //welcome-1 welcome-2
fun_two(1000, 2000); //1000 2000
fun_two(false, false); //false false
function fun_three(arg1, arg2) {
    console.log(arg1, arg2);
}
fun_three("hi_1", "hi_2"); //hi_1 hi_2
fun_three("hi_3", 500); //hi_3 500
fun_three("welcome100", false); //welcome100 false
fun_three("angular-12", "css-3"); //angular-12 css-3
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    return class_one;
}());
var obj = new class_one("hello_1", "hello_2", "hello_3");
console.log(obj.var_one, obj.var_two, obj.var_three);
//hello_1 hello_2 hello_3
var class_two = /** @class */ (function () {
    function class_two(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    return class_two;
}());
var obj1 = new class_two("welcome100", "welcome10000", "welcome100000");
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
//welcome100 welcome10000 welcome100000
var obj2 = new class_two(100, 200, 300);
console.log(obj2.var_one, obj2.var_two, obj2.var_three);
//100 200 300
var obj3 = new class_two(true, false, true);
console.log(obj3.var_one, obj3.var_two, obj3.var_three);
var obj4 = {
    var_one: "hello_1",
    var_two: "hello_2",
    var_three: "hello_3"
};
console.log(obj4.var_one, obj4.var_two, obj4.var_three);
var obj5 = {
    var_one: 10,
    var_two: "HUOS",
    var_three: false
};
console.log(obj5.var_one, obj5.var_two, obj5.var_three);
var class_three = /** @class */ (function () {
    function class_three() {
        this.var_one = "jimmy_1";
        this.var_two = "jimmy-2";
        this.var_three = "jimmy-3";
    }
    return class_three;
}());
var obj6 = new class_three();
console.log(obj6.var_one, obj6.var_two, obj6.var_three);
