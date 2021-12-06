//if we want to set the datatype dymanically at runtime then we have to this generics..

function fun_one<a,b>(arg1:a,arg2:b):void{
    console.log(arg1,arg2);
}

fun_one<string, string>("hello_1","hello_2");            //hello_1 hello_2
fun_one<number ,number>(10,20);                           //10 20     
fun_one<boolean, boolean>(true,false);                   //true false



function fun_two<a,b>(arg1:a,arg2:b):void{
    console.log(arg1,arg2);
}
fun_two<string,string>("welcome-1","welcome-2");    //welcome-1 welcome-2
fun_two<number ,number>(1000,2000);                     //1000 2000
fun_two<boolean ,boolean>(false,false);                 //false false





function fun_three<x>(arg1:string,arg2:x):void{
    console.log(arg1,arg2);
}
fun_three<string>("hi_1","hi_2");                               //hi_1 hi_2
fun_three<number>("hi_3",500);                                     //hi_3 500
fun_three<boolean>("welcome100",false);                        //welcome100 false
fun_three<any>("angular-12","css-3");                            //angular-12 css-3





class class_one <x,y,z>{
    var_one:x;
    var_two:y;
    var_three:z;
    constructor(arg1:x,arg2:y,arg3:z){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
}
let obj:class_one<string,string,string> = new class_one("hello_1","hello_2","hello_3");
console.log(obj.var_one,obj.var_two,obj.var_three);
//hello_1 hello_2 hello_3


class class_two<x,y,z>{
    var_one:x;
    var_two:y;
    var_three:z;
    constructor(arg1:x,arg2:y,arg3:z){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
}
let obj1:class_two<string,string,string> = new class_two("welcome100","welcome10000","welcome100000");
console.log(obj1.var_one,obj1.var_two,obj1.var_three);
//welcome100 welcome10000 welcome100000


let obj2:class_two<number,number,number> = new class_two(100,200,300);
console.log(obj2.var_one,obj2.var_two,obj2.var_three);
//100 200 300



let obj3:class_two<boolean, boolean ,boolean> = new class_two(true,false,true);
console.log(obj3.var_one,obj3.var_two,obj3.var_three);
//true false true








interface interface1<x,y,z>{
     var_one:x;
     var_two:y;
     var_three:z;
}

let obj4:interface1 <string,string,string> = {
    var_one:"hello_1",
    var_two:"hello_2",
    var_three:"hello_3"
}
console.log(obj4.var_one,obj4.var_two,obj4.var_three);
//hello_1 hello_2 hello_3


let obj5:interface1 <number ,string,boolean>={
    var_one:10,
    var_two:"HUOS",
    var_three:false,
}
console.log(obj5.var_one,obj5.var_two,obj5.var_three);
//10 HUOS false

class class_three implements interface1<any,any,any>{
    var_one="jimmy_1";
    var_two="jimmy-2";
    var_three="jimmy-3";

}
let obj6:class_three = new class_three();
console.log(obj6.var_one,obj6.var_two,obj6.var_three);

//jimmy_1 jimmy-2 jimmy-3














 



