import {Component} from "angular2/core";
import {Meal} from "./Models/meal.model";
import {MealListComponent} from "./Components/meal-list.component";

@Component ({
  selector: "my-app",
  directives: [MealListComponent],
  template:
  `
    <div class="my-app">
      <h1 class="page-header">Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Apple Pie", 900, "It was Dutch apple pie."),
      new Meal("Mini Mac & Cheese", 500, "4 types of cheeses!"),
      new Meal("Cheesecake", 450, "It was delicious, and it's made of milk so it has to be healthy!")
    ];
  }
}
