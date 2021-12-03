/*
 
   Read only keyword
   *****************

   1) we can ony read the data 
   
   2) we can't modify the data




*/



class class_one{
    readonly var_one:string = "HELLO"
}

let obj:class_one = new class_one();
console.log(obj.var_one);
//HELLO


// obj.var_one = "WELCOME"




class class_two{
    readonly var_two:any = "HELLO ANGULAR"
}

let obj1:class_two = new class_two();
console.log(obj1.var_two);
//HELLO ANGULAR





