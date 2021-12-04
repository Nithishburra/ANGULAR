"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
console.log(file1_1.var_one); ////welcome to this modules
var file1_2 = require("./file1");
console.log(file1_2.var_two); //hello typescript
// import { sub_one } from "./file1";
// import { sub_two } from "./file1";
// import { sub_three } from "./file1";
// import{sub_one ,sub_two, sub_three} from "./file1";
// import * as subjects from "./file1";
// console.log(subjects.sub_one,subjects.sub_two,subjects.sub_three);
// //angular javascript typescript
var subjects = require("./file1");
console.log(subjects);
var obj = {
    var_one: "hello_1",
    var_two: "hello_2",
    var_three: "hello_3"
};
console.log(obj.var_one, obj.var_two, obj.var_three);
