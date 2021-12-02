/*

    Modifiers
    *********
    1) public
    2) private
    3) protected


1) public modifier
*******************
1) public modifiers are applicable to functions and variables and constructor

2) public modifiers are not applicable to classes

3) public members by default availability to child classes

4) we can access public members by using the class objects


*/
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
// public class class_one{}
var class_two = /** @class */ (function () {
    function class_two() {
        this.var_one = "hello_1";
    }
    class_two.prototype.fun_one = function () {
        return "hello_2";
    };
    return class_two;
}());
var obj = new class_two();
console.log(obj.var_one, obj.fun_one());
//hello_1 hello_2
var class_three = /** @class */ (function () {
    function class_three() {
        this.var_two = "angular";
    }
    class_three.prototype.fun_two = function () {
        return "javascript";
    };
    return class_three;
}());
var class_four = /** @class */ (function (_super) {
    __extends(class_four, _super);
    function class_four() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class_four;
}(class_three));
var obj1 = new class_four();
console.log(obj1.var_two, obj1.fun_two());
//angular javascript      
//private
//1) private modifiers are not applicable to classes
//2) private modifiers are applicable to variables and functions and constructors
//3) we can't create the object to the private constructor..
//4) we can access private members with in the class by using the this keyword...
//5) we can't access private members by using the class objects
//6) private members are not accessble to child classes....
//private class class_five{}
var class_six = /** @class */ (function () {
    function class_six() {
        this.var_three = "hello_1";
    }
    class_six.prototype.fun_six = function () {
        return "welcome2";
    };
    return class_six;
}());
// class class_seven{
//     private constructor(){
//     }
// }
// let obj4:class_seven  = new class_seven()
var class_test = /** @class */ (function () {
    function class_test() {
        this.var_one = "welcome to typescript";
    }
    return class_test;
}());
/*
class class_demo{
    private var_three:string
}

let obj5:class_demo = new class_demo();
console.log(obj5.var_three)
*/
/*
class class_ten{
    private var_one:string = "hi_1"
}

class class_eleven extends class_ten{

}

let obj6:class_eleven = new class_eleven();
console.log(obj6.var_one);
*/
//protected
//1) protected  modifier are not accessbile to class level
//2) protected  modifier applicable to varibles and functions and constructor also..
//3) protected  modifier are we can't access by using the class objects...
//4) we can't create object to the protected constructor.....
//5) protected members are availablity to the child classes
//  protected class class_10{
//  }
var class_11 = /** @class */ (function () {
    function class_11() {
        this.var_one = "HELLO_1";
    }
    class_11.prototype.fun_one = function () {
        return "HELLO_2";
    };
    return class_11;
}());
/*
class class_12{
    protected var_one:string="welcome"
}

let obj7:class_12 = new class_12();
console.log(obj7.var_one);
*/
/*
class class_13{
    protected constructor(){

    }
}

let obj8:class_13 = new class_13();
*/
var class_14 = /** @class */ (function () {
    function class_14() {
        this.var_one = "JAVA";
    }
    return class_14;
}());
var class_15 = /** @class */ (function (_super) {
    __extends(class_15, _super);
    function class_15() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = _this.var_one;
        return _this;
    }
    return class_15;
}(class_14));
var obj9 = new class_15();
console.log(obj9.var_two);
