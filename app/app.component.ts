import {Component} from "angular2/core";
import {Meal} from "./meal.model";
import {MealListComponent} from "./meal-list.component";

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
      new Meal("Apple Pie", 1000, "It was Dutch apple pie."),
      new Meal("Cheesecake", 450, "It was delicious, and it's made of milk so it has to be healthy!")
    ];
  }
}
