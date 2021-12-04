/*

polymorphism
************
1) it behaves like one form can have many functionalities.

  there are two types of polymorphism

  1) function overriding
  2) function overloading


  1) function overriding means overriding the parent class functionality with child class functionality called as function overriding..



  2) inheritance is must be required for function overriding..





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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.earn = function () {
        return "parent earned 1cr rupees";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.earn = function () {
        return " child earned 10crore rupees";
    };
    return Child;
}(Parent));
var obj = new Child();
console.log(obj.earn());
// child earned 10crore rupees
var Parent1 = /** @class */ (function () {
    function Parent1() {
    }
    Parent1.prototype.dbfun = function () {
        return "oracle db conncetion";
    };
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.dbfun = function () {
        return "sql db connection";
    };
    return Child1;
}(Parent1));
var subchild = /** @class */ (function (_super) {
    __extends(subchild, _super);
    function subchild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subchild.prototype.dbfun = function () {
        return "rabitMQ db connection";
    };
    return subchild;
}(Child1));
var obj1 = new subchild();
console.log(obj1.dbfun());
//rabitMQ db connection
var Parent2 = /** @class */ (function () {
    function Parent2() {
    }
    Parent2.prototype.add = function () {
        return 30 * 2;
    };
    Parent2.prototype.add1 = function () {
        return "hello";
    };
    return Parent2;
}());
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child2.prototype.add = function () {
        return 90 + 2;
    };
    Child2.prototype.add1 = function () {
        return "hello man";
    };
    return Child2;
}(Parent2));
var obj2 = new Child2();
console.log(obj2.add(), obj2.add1());
//92 hello man
//overloading
// same "functionality" with same "parameters" is called as function overloading.
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function (arg1, arg2) {
        console.log(arg1 + arg2);
    };
    return class_one;
}());
;
var obj3 = new class_one();
obj3.fun_one(10, 20); //30
obj3.fun_one("10", "10"); //1010
obj3.fun_one("hello1", "bye"); //hello1bye   
obj3.fun_one("hi", 10); //hi10
//obj3.fun_one(10,"hi");                   //No overload matches this call.
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.fun_two = function (arg1, arg2) {
        console.log(arg1 + arg2);
    };
    return class_two;
}());
var obj4 = new class_two();
obj4.fun_two("hi", 10); //hi10
obj4.fun_two(10, 50); //60
obj4.fun_two(false, "hello");
