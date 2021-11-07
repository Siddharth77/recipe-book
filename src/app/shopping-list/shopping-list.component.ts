import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
    .subscribe((ingredients: Ingredient[])=> {
      this.ingredients = ingredients;
    })
  }
}