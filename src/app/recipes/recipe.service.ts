import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://www.python.org/static/opengraph-icon-200x200.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'http://tastykitchen.com/wp-content/themes/tastykitchen-v2/assets/img/submit-your-recipe.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
      ];
    
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}