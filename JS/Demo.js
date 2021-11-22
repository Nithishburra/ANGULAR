console.log("welcome to angular");
//welcome to angular

console.table(["angular","nodejs","vuejs","Reactjs","expressjs","monogoDB"])
/*─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'angular'  │
│    1    │  'nodejs'   │
│    2    │   'vuejs'   │
│    3    │  'Reactjs'  │
│    4    │ 'expressjs' │
│    5    │ 'monogoDB'  │
└─────────┴─────────────┘
*/


console.log(0.2+0.3==0.5);               //true

console.log(0.1+0.2===0.3);              //false

console.log(0.1+0.2 == 0.3);             //false


console.log(0.1+0.2);                     //0.30000000000000004
console.log(0.1+0.2 == 0.3);                 //false
console.log(0.1+0.2 === 0.3);               //false


console.log(0.1+0.2==0.30000000000000004);      //true
console.log(0.1+0.2===0.30000000000000004);     //true




let arr = [10,20,30,40,50]
console.log(
    arr.map((element,index)=>{
        return element/2                        //[ 5, 10, 15, 20, 25 ]
    })
);


let arr1 = [1000,2000,3000,4000,5000,6000,7000]
console.log(
    arr1.map((element,index)=>{
        return element == 1000?element+1:element
    })
);




let arr2 = [100,200,300,400,500,600,700,800]
console.log(
    arr2.map((element,index)=>{
        return element == 500?element-495:element
    })
);


let arr3 = [101,201,301,401,501,601]
console.log(
    arr3.map((element,index)=>{
        return element == 201?element*2:element;
    })
);


let arr4 = [1,2,3,4,5,6,7,8]
console.log(
    arr4.map((element,index)=>{
        return index/2;
    })
)


let arr5 = [900,800,700,600,500,400,300,200,100]
console.log(
    arr5.reverse()
)



let arr6 = [11,22,33,44,55,66,77]
console.log(
    arr6.map((element,index)=>{
          return index%2
    })
)



let arr7 = [10,200,30,400,50,600]
console.log(
    arr7.map((element,index)=>{
        return index%2 == 0?element*100:element
    })
);


let arr8 = [1,2,3,4,5,6]
console.log(
    arr8.map((element,index)=>{
        return index%4==0?element*100:element
    })
);

let arr9 = [50,60,70,80,90]
console.log(
    arr9.map((element,index)=>{
        return index%4==0?element*100:element
    })
);


console.log(
    [...Array(10).keys()].map((element,index)=>{
        return element+1
    })
);

let arr10 = [102,103,104,105,106]

console.log(
    arr10.map((element,index)=>{
          return element*100
    }).filter((element,index)=>{
        return element>104
    }).reduce((arg1,arg2)=>{
         return arg1+arg2
    })
);



let arr11= [10,20,30,40,50,60,70,80,90,100];
    console.log( arr11.length );                              //10
    console.log( arr11[0] );                                  //10
    console.log( arr11[4] );                                  //50
    console.log( arr11[9] );                                  //100
    console.log( arr11[10] );                                 //undefined
    console.log( arr11[1000] );                               //undefined
    console.log( arr11[-1] );                                 //undefined
    console.log( arr11[-1000] );                              //undefined
    arr11.length = 5;
    console.log( arr11[0] );
    console.log( arr11[4] );
    console.log( arr11[9] );  





let arr12 = [1,2,3,4,5,6]

  console.log(arr12.length);
  console.log(arr12[4]);
  console.log(arr12[2]);
  arr12.length = 4;
  console.log(arr12);
  console.log(arr12[0]);







let arr13 = [10,20,30,40,50]
console.log(
    arr13.filter((element,index)=>{
         return element>=40
    })
);
