/*

Super keyword
**************

1) child class will call the  parent class members by using the super() keyword
2) the super keyword we will not accessible to variables.


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
    function Parent(arg1) {
        this.arg1 = arg1;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(arg1, arg2) {
        var _this = _super.call(this, arg1) || this;
        _this.arg1 = arg1;
        _this.arg2 = arg2;
        return _this;
    }
    return Child;
}(Parent));
var Subchild = /** @class */ (function (_super) {
    __extends(Subchild, _super);
    function Subchild(arg1, arg2, arg3) {
        var _this = _super.call(this, arg1, arg2) || this;
        _this.arg1 = arg1;
        _this.arg2 = arg2;
        _this.arg3 = arg3;
        return _this;
    }
    return Subchild;
}(Child));
var obj = new Subchild("hello_1", "hello_2", "hello_3");
console.log(obj.arg1, obj.arg2, obj.arg3);
//hello_1 hello_2 hello_3
var Parent1 = /** @class */ (function () {
    function Parent1(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1(arg1, arg2, arg3) {
        var _this = _super.call(this, arg1, arg2) || this;
        _this.arg1 = arg1;
        _this.arg2 = arg2;
        _this.arg3 = arg3;
        return _this;
    }
    return Child1;
}(Parent1));
var Subchild1 = /** @class */ (function (_super) {
    __extends(Subchild1, _super);
    function Subchild1(arg1, arg2, arg3, arg4) {
        var _this = _super.call(this, arg1, arg2, arg3) || this;
        _this.arg1 = arg1;
        _this.arg2 = arg2;
        _this.arg3 = arg3;
        _this.arg4 = arg4;
        return _this;
    }
    return Subchild1;
}(Child1));
var obj1 = new Subchild1("angular", "javascript", "typescript", "vuejs");
console.log(obj1.arg1, obj1.arg2, obj1.arg3, obj1.arg4);
//angular javascript typescript vuejs
var Parent2 = /** @class */ (function () {
    function Parent2() {
    }
    Parent2.prototype.fun_one = function () {
        return "welcome to this Typescript";
    };
    return Parent2;
}());
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child2.prototype.fun_two = function () {
        return _super.prototype.fun_one.call(this);
    };
    return Child2;
}(Parent2));
var obj2 = new Child2();
console.log(obj2.fun_two());
//welcome to this Typescript
var Parent3 = /** @class */ (function () {
    function Parent3() {
    }
    Parent3.prototype.fun_one = function () {
        return "HI HELLO HOW ARE YOU!";
    };
    return Parent3;
}());
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child3.prototype.fun_two = function () {
        return _super.prototype.fun_one.call(this);
    };
    return Child3;
}(Parent3));
var obj3 = new Child3();
console.log(obj3.fun_two());
//HI HELLO HOW ARE YOU!
