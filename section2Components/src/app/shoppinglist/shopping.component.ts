/**
 * Created by Zarana Patel on 4/12/17.
 */
import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector:'app-shoppinglist',
  templateUrl:'./shopping.component.html',
  styleUrls:['./shopping.component.css']
})
export class ShoppingComponent{

    ingredients: Ingredient[]  = [
      new Ingredient('Apples',5),
      new Ingredient('Chocolates', 10)
    ];
}
