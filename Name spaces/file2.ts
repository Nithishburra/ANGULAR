///<reference path = "./file1.ts"/>
console.log(
    Transactions.acc_bal,
    Transactions.credit_bal,
    Transactions.debit_bal
);

//1100000 150000 123000




console.log(
    Functions.fun_one(),
    Functions.fun_two(),
    Functions.fun_three(),
    Functions.fun_four()
);

//Hello_1 Hello_2 Hello_3 Hello_4




let obj:classes.class_one = new classes.class_one("hi_1","hi_2","hi_3");
console.log(
    obj.var_one,
    obj.var_two,
    obj.var_three
);

//hi_1 hi_2 hi_3


let obj1:Interface.interface1 = {
       
        var_one:"hello_1",
        var_two:"hello_2",
        var_three:"hello_3"
}
console.log(obj1.var_one,obj1.var_two,obj1.var_three);

//hello_1 hello_2 hello_3
