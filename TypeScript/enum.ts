// if we want create our own datatype is called as enum...

//enum is the keyword
//enum is used to create custom datatype
//1) numeric enum
//2) string enum
//3) heterogenous enum




enum corona{
    alfa,
    beta,
    gama,
    delta,
    omicron
}
console.log(corona);
console.log(corona.alfa,corona.beta,corona.gama,corona.delta,corona.omicron);
console.log(corona["alfa"],corona["beta"],corona["gama"],corona["delta"],corona["omicron"]);
console.log(corona[0],corona[1],corona[2],corona[3],corona[4]);



enum europe{
    UK,
    LONDON,
    manncheter,
    southmpton,
    ireland
}

console.log(europe);
console.log(europe.UK,europe.LONDON,europe.manncheter,europe.southmpton,europe.ireland);
console.log(europe["UK"],europe["LONDON"],europe["manncheter"],europe["southmpton"],europe["ireland"]);
console.log(europe[4],europe[3],europe[2],europe[1],europe[0]);        //ireland southmpton manncheter LONDON UK








enum enum1{
    const_1 = 100,
    const_2,
    const_3,
    const_4,
    const_5,
    const_6
}
console.log(enum1);




enum enum2{
    const_1 = 100,
    const_2 = 200,
    const_3 = 300,
    const_4 = 400
}
console.log(enum2);




enum enum3{
    const_1 = 100,
    const_2 = const_1*2,
    const_3 = const_2+200,
    const_4 = const_3-100
}
console.log(enum3);


enum enum4{
    const_1 = 10,
    const_2 = const_1*2,
    const_3 = const_2+100,
    const_4 = const_3 + 100
}
console.log(enum4);







function fun_one():number{
    return 100;
}


enum enum5{
    const_1 = fun_one(),
    const_2 = const_1*2,
    const_3 = const_2+100,
    const_4 = const_3+100
}

console.log(enum5);

enum enum6{
    const_2,
    const_3,
    const_1 = fun_one()
}
console.log(enum6);






function fun_two():number{
    return 50;
}

enum enum7{
    const_1 = fun_two(),
    const_2 = fun_two()+50,
    const_3 = const_2*100
}
console.log(enum7);

enum enum8{
    const_1,
    const_2,
    const_3 = fun_two()
}
console.log(enum8);






enum enum8{
    val_1 = 100,
    val_2,
    val_3,
    val_4
}

function fun_three():enum8{
    return enum8.val_1;
}
console.log(fun_three());
//100






//string enum
// for string enum initialization is mandatory..

enum enum9{
    val1 = "hello_1",
    val2 = "hello_2",
    val3 = "hello_3",
    val4 = "hello_4"
}
console.log(enum9);
console.log(enum9.val1,enum9.val2,enum9.val3,enum9.val4);
console.log(enum9["val1"],enum9["val2"],enum9["val3"],enum9["val4"]);
console.log(enum9[0],enum9[1],enum9[2],enum9[3]);
console.log(Object.keys(enum9));


/*
enum enum10{
    val_1 = "hey",
    val_2,
}                                   //Enum member must have initializer
*/




//heterogeneous enum
//enum string + enum number is called as heterogenous
// initilization mandatory for hetergenous enum

enum enum11{
    VAL_1 = 100,
    VAL_2 = "WELCOME"
}
console.log(enum11);



/*
enum enum12{
    val_1 = 100,
    val_2 = "hi",
    val_3,
}
*/
















