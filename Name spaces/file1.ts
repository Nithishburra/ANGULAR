
//logical grouping of similar functionalities is called as Namespace


namespace Transactions{

export let acc_bal:number = 1100000;
export let credit_bal:number = 150000;
export let debit_bal:number =123000;

}


namespace Functions{
    export function fun_one():string{
        return "Hello_1";
    }
    
    export function fun_two():string{
        return "Hello_2";
    }

    export function fun_three():string{
        return "Hello_3"
    }
    
    export function fun_four():string{
        return "Hello_4"
    }
}



namespace classes{
    export class class_one{
        var_one:string;
        var_two:string;
        var_three:string;
    
    constructor(arg1:string,arg2:string,arg3:string){
          this.var_one = arg1;
          this.var_two = arg2;
          this.var_three = arg3;
    }
}

};




namespace Interface{
    export interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
}


