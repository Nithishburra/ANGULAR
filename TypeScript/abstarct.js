//when ever we know the partial implementation then we will choose abstract classes
//will we declare abstact classses by using "abstract" keyword..
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
/*
 abstract class class_one{
    fun_one():any{
        return "hello_1"
    }

    abstract fun_two():any;
}

class class_two extends class_one{

    fun_two():any{
        return "hello_2";
    }
};

let obj:class_two = new class_two();
console.log(obj.fun_one(),obj.fun_two());
//hello_1 hello_2
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_one = function () {
        return "hi angular";
    };
    return class_two;
}(class_one));
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three.prototype.fun_two = function () {
        return "hi typescript";
    };
    class_three.prototype.fun_three = function () {
        return "hi javascript";
    };
    return class_three;
}(class_two));
var obj = new class_three();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
var class_four = /** @class */ (function () {
    function class_four() {
    }
    class_four.prototype.fun_one = function () {
        return "hello_1";
    };
    class_four.prototype.fun_two = function () {
        return "hello_2";
    };
    return class_four;
}());
var class_five = /** @class */ (function (_super) {
    __extends(class_five, _super);
    function class_five() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_five.prototype.fun_three = function () {
        return "hello_3";
    };
    return class_five;
}(class_four));
;
var obj1 = new class_five();
console.log(obj1.fun_one(), obj1.fun_two(), obj1.fun_three());
