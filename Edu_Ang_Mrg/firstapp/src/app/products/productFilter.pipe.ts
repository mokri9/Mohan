import { Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product.model';

@Pipe({
    name:'search'
})

export class ProductSearchPipe implements PipeTransform{

    transform(value: IProduct[],userInput:string){

        //verify user input and change in lowercase
        userInput = userInput? userInput.toLowerCase(): null;

        return userInput?value.filter((product)=> 
            product.productName.toLowerCase().indexOf(userInput)!==-1
        ):value;

    }
}


/*
var ages ={22,32,18,11,40}
ages.filter((age)=> {return age>=18});*/