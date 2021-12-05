var Transactions;
(function (Transactions) {
    Transactions.acc_bal = 1100000;
    Transactions.credit_bal = 150000;
    Transactions.debit_bal = 123000;
})(Transactions || (Transactions = {}));
var Functions;
(function (Functions) {
    function fun_one() {
        return "Hello_1";
    }
    Functions.fun_one = fun_one;
    function fun_two() {
        return "Hello_2";
    }
    Functions.fun_two = fun_two;
    function fun_three() {
        return "Hello_3";
    }
    Functions.fun_three = fun_three;
    function fun_four() {
        return "Hello_4";
    }
    Functions.fun_four = fun_four;
})(Functions || (Functions = {}));
var classes;
(function (classes) {
    var class_one = /** @class */ (function () {
        function class_one(arg1, arg2, arg3) {
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
        return class_one;
    }());
    classes.class_one = class_one;
})(classes || (classes = {}));
;
///<reference path = "./file1.ts"/>
console.log(Transactions.acc_bal, Transactions.credit_bal, Transactions.debit_bal);
//1100000 150000 123000
console.log(Functions.fun_one(), Functions.fun_two(), Functions.fun_three(), Functions.fun_four());
//Hello_1 Hello_2 Hello_3 Hello_4
var obj = new classes.class_one("hi_1", "hi_2", "hi_3");
console.log(obj.var_one, obj.var_two, obj.var_three);
//hi_1 hi_2 hi_3
var obj1 = {
    var_one: "hello_1",
    var_two: "hello_2",
    var_three: "hello_3"
};
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
