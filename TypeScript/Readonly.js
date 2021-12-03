/*
 
   Read only keyword
   *****************

   1) we can ony read the data
   
   2) we can't modify the data




*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "HELLO";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one);
// obj.var_one = "WELCOME"
var class_two = /** @class */ (function () {
    function class_two() {
        this.var_two = "HELLO ANGULAR";
    }
    return class_two;
}());
var obj1 = new class_two();
console.log(obj1.var_two);
