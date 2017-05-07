import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is test','http://www.insearchofheston.com/wp-content/uploads/2015/03/Heston-Blumenthal-Fat-Duck-Birthday-cake-recipe-background-page.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
