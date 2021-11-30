/*

interface
***********
1) whenever we know the delaration and if we don't know the implementations then we will choose interfaces..

2) we will declare the interface by usiing the interface keyword..

3) implementation provided by the either classes or json..

4) multiple inheritance supported by the interface
*/


interface interface1{
    var_one:string;
    var_two:string;
    var_three:string;
};

let obj1:interface1= {

    var_one:"java",
    var_two:"adv java",
    var_three:"oracle",
}

console.log(obj1.var_one,obj1.var_two,obj1.var_three);  //java adv java oracle


let obj2:interface1={
    var_one:"angular",
    var_two:"js",
    var_three:"html"
}

console.log(obj2.var_one,obj2.var_two,obj2.var_three);  //angular js html


class class_one implements interface1{

    var_one:string="vuejs";
    var_two:string="node js";
    var_three:string="monogoDB"

}

let obj:class_one = new class_one();
console.log(obj.var_one,obj.var_two,obj.var_three); //vuejs node js monogoDB








interface interface2{
    fun_one():void;
    fun_two():void;
    fun_three():void;
    fun_four():void;
}

class class_two implements interface2{
    fun_one():void{
        console.log("hello_1");
    }
    fun_two():void{
        console.log("hello_2");
    }
    fun_three():void{
        console.log("hello_3");
    }
    fun_four():void{
        console.log("hello_4");
    }
};

let obj3:class_two = new class_two();
obj3.fun_one(),obj3.fun_two(),obj3.fun_three(),obj3.fun_four()



let obj4:interface2 = {
    fun_one :():void=>console.log("welcome_1"),
    fun_two :():void=>console.log("welcome_2"),
    fun_three :():void=>console.log("welcome_3"),
    fun_four :():void=>console.log("welcome_4")
}

obj4.fun_one(),obj4.fun_two(),obj4.fun_three(),obj4.fun_four()










interface interface3{
    var_one:string;
}
interface interface4 extends interface3{
    var_two:string;
}

let obj5:interface4={
    var_one:"hey maa_!",
    var_two:"hey_maa!!"
}
console.log(obj5.var_one,obj5.var_two);
//hey maa_! hey_maa!!













interface interface5{
    var_one:string;
}
interface interface6 extends interface5{
    var_two:string;
}
interface interface7 extends interface6{
    var_three:string;
}
let obj6:interface7={
    var_one:"india_1",
    var_two:"india_2",
    var_three:"india_3"
}

console.log(obj6.var_one,obj6.var_two,obj6.var_three);

//india_1 india_2 india_3


class class_three implements interface7{
    var_one:string="hello_1"
    var_two:string="hello_2"
    var_three:string = "hello_3"
}

let obj7:class_three =new class_three();
console.log(obj7.var_one,obj7.var_two,obj7.var_three);
//hello_1 hello_2 hello_3








interface interface8{
    var_one:string;
}
interface interface9{
    var_two:string;
}
interface interface10 extends interface8,interface9{
    var_three:string;
}

let obj8:interface10 = {
    var_one:"javascript_1",
    var_two:"javascript_2",
    var_three:"javascript_3"
}

console.log(obj8.var_one,obj8.var_two,obj8.var_three);

//javascript_1 javascript_2 javascript_3





interface interface11{
    var_one:string;
}
interface interface12 extends interface11{
    var_two:string;
}
interface interface13 extends interface11{
   var_three:string;
}
interface interface14 extends interface11{
    var_four:string;
}

let obj9:interface11={
    var_one:"hey_1"                    //hey_1
}
console.log(obj9.var_one);

let obj10:interface12={
    var_one:"hey_1",
    var_two:"hey_2"

}
console.log(obj10.var_one,obj10.var_two);       //hey_1 hey_2


let obj11:interface13={
    var_one:"hey_1",
    var_three:"hey_3"
}
console.log(obj11.var_one,obj11.var_three);    //hey_1 hey_3


let obj12:interface14={
    var_one:"hey_1",
    var_four:"hey_4"
}
console.log(obj12.var_one,obj12.var_four);      //hey_1 hey_4













interface interfaceParent{
    var_one:string;
}

interface interfacechild1 extends interfaceParent{
    var_two:string;
}
interface interfacechild2 extends interfaceParent{
    var_two:string;
}
interface interfaceSubchild extends interfacechild1,interfacechild2{
     var_three:string;
}

let obj13:interfaceParent={
    var_one:"js_1"
}
console.log(obj13.var_one);
//js_1
let obj14:interfacechild1={
    var_one:"js_1",
    var_two:"js_2"
}
console.log(obj14.var_one,obj14.var_two);
 //js_1 js_2
let obj15:interfacechild2={
    var_one:"hey_1",
    var_two:"js_3"
}
console.log(obj15.var_one,obj15.var_two);
//hey_1 js_3

let obj16:interfaceSubchild={
    var_one:"hello_1",
    var_two:"hello_2",
    var_three:"hello_3"
}

console.log(obj16.var_one,obj16.var_two,obj16.var_three);
//hello_1 hello_2 hello_3

