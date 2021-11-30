/*

interface
***********
1) whenever we know the delaration and if we don't know the implementations then we will choose interfaces..

2) we will declare the interface by usiing the interface keyword..

3) implementation provided by the either classes or json..

4) multiple inheritance supported by the interface
*/
;
var obj1 = {
    var_one: "java",
    var_two: "adv java",
    var_three: "oracle"
};
console.log(obj1.var_one, obj1.var_two, obj1.var_three); //java adv java oracle
var obj2 = {
    var_one: "angular",
    var_two: "js",
    var_three: "html"
};
console.log(obj2.var_one, obj2.var_two, obj2.var_three); //angular js html
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "vuejs";
        this.var_two = "node js";
        this.var_three = "monogoDB";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three); //vuejs node js monogoDB
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.fun_one = function () {
        console.log("hello_1");
    };
    class_two.prototype.fun_two = function () {
        console.log("hello_2");
    };
    class_two.prototype.fun_three = function () {
        console.log("hello_3");
    };
    class_two.prototype.fun_four = function () {
        console.log("hello_4");
    };
    return class_two;
}());
;
var obj3 = new class_two();
obj3.fun_one(), obj3.fun_two(), obj3.fun_three(), obj3.fun_four();
var obj4 = {
    fun_one: function () { return console.log("welcome_1"); },
    fun_two: function () { return console.log("welcome_2"); },
    fun_three: function () { return console.log("welcome_3"); },
    fun_four: function () { return console.log("welcome_4"); }
};
obj4.fun_one(), obj4.fun_two(), obj4.fun_three(), obj4.fun_four();
var obj5 = {
    var_one: "hey maa_!",
    var_two: "hey_maa!!"
};
console.log(obj5.var_one, obj5.var_two);
var obj6 = {
    var_one: "india_1",
    var_two: "india_2",
    var_three: "india_3"
};
console.log(obj6.var_one, obj6.var_two, obj6.var_three);
//india_1 india_2 india_3
var class_three = /** @class */ (function () {
    function class_three() {
        this.var_one = "hello_1";
        this.var_two = "hello_2";
        this.var_three = "hello_3";
    }
    return class_three;
}());
var obj7 = new class_three();
console.log(obj7.var_one, obj7.var_two, obj7.var_three);
var obj8 = {
    var_one: "javascript_1",
    var_two: "javascript_2",
    var_three: "javascript_3"
};
console.log(obj8.var_one, obj8.var_two, obj8.var_three);
var obj9 = {
    var_one: "hey_1" //hey_1
};
console.log(obj9.var_one);
var obj10 = {
    var_one: "hey_1",
    var_two: "hey_2"
};
console.log(obj10.var_one, obj10.var_two); //hey_1 hey_2
var obj11 = {
    var_one: "hey_1",
    var_three: "hey_3"
};
console.log(obj11.var_one, obj11.var_three); //hey_1 hey_3
var obj12 = {
    var_one: "hey_1",
    var_four: "hey_4"
};
console.log(obj12.var_one, obj12.var_four); //hey_1 hey_4
var obj13 = {
    var_one: "js_1"
};
console.log(obj13.var_one);
var obj14 = {
    var_one: "js_1",
    var_two: "js_2"
};
console.log(obj14.var_one, obj14.var_two);
var obj15 = {
    var_one: "hey_1",
    var_two: "js_3"
};
console.log(obj15.var_one, obj15.var_two);
var obj16 = {
    var_one: "hello_1",
    var_two: "hello_2",
    var_three: "hello_3"
};
console.log(obj16.var_one, obj16.var_two, obj16.var_three);
