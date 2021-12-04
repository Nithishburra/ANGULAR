 // when ever we export the variable then data should be exported in the form of json object.......
 
 
 export let var_one:string = "welcome to this modules";  


 export let var_two:string = "hello typescript";





 export let sub_one:any = "angular";
 export let sub_two:any = "javascript";
 export let sub_three:any = "typescript";


 //if we don't want to create json object when we are importing the data ..
 //if we want to export the data by default then we have to follow below approach

//  let var_three:string = "hello world"
//  export default var_three;




//   export default function fun_one():any{
//       return "hello_1"
//   }




//   export default class class_one{
//       var_one:string="hello_10";

//       fun_one():string{
//           return this.var_one;
//       }
//   };



export default interface interface1{
    var_one:string;
    var_two:string;
    var_three:string;
}

