/*inheritance
*****************

1) getting the data from the parent class to child class is known as inheritance.

2) we will implement the inheritance with the extends keyword..

3) we have 5 types of inheritances

   1) single level inheritance

   2) multi level inheritance

   3) multiple inheritance

   4) hirarchial inheritance

   5) hybrid inheritance

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
/*
single level inheritance
*************************

class Parent{
    var_one:string="hello_1";
}
class child extends Parent{
       var_two:string="hello_2";
}

let obj:child = new child();
console.log(obj.var_one,obj.var_two);
//hello_1 hello_2


let obj1:Parent = new Parent();
console.log(obj1.var_one);
//hello_1




let obj2:Parent = new child();    //parent class holding the child class object
console.log(obj2.var_one);//hello_1


//let obj3:Child = new child();-> child class can't hold the parent class object..

*/
/*
class Parent{
    var_one:string = "hello_1"
    fun_one():string{
        return this.var_one;
    };
};


class Child extends Parent{
    var_two:string = "hello_2"
    fun_two():string{
        return this.var_two;
    }
}

let obj:Child = new Child();
console.log(obj.fun_one(),obj.fun_two());
//hello_1 hello_2
*/
/*
  multi level Inheritance
  ********************
class Parent{
    var_one:string ="welcome_1";
    
}
class Child extends Parent{
    var_two:string = "welcome_2";
}

class Subchild extends Child{
    var_three:string = "welcome_3";
}

let obj:Parent = new Parent();
console.log(obj.var_one);
//welcome_1

let obj1:Child = new Child();
console.log(obj1.var_one,obj1.var_two);
//welcome_1 welcome_2

let obj2:Subchild  = new Subchild();
console.log(obj2.var_one,obj2.var_two,obj2.var_three);
//welcome_1 welcome_2 welcome_3

*/
/*
multiple inheritance
******************
1) in typescript multiple inheritance is not supported
class Parent1{}

class Parent2{}


class Child extends Parent1,Parent2{}
*/
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "hi_1";
    }
    return Parent;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "hi_2";
        return _this;
    }
    return Child1;
}(Parent));
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "hi_3";
        return _this;
    }
    return Child2;
}(Parent));
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_three = "hi_4";
        return _this;
    }
    return Child3;
}(Parent));
var obj1 = new Parent();
console.log(obj1.var_one);
var obj2 = new Child1();
console.log(obj2.var_one, obj2.var_two);
var obj3 = new Child2();
console.log(obj3.var_one, obj3.var_two);
var obj4 = new Child3();
console.log(obj4.var_one, obj4.var_three);
