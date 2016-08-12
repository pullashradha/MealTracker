import {Component} from "angular2/core";
import {Meal} from "./meal.model";
import {MealListComponent} from "./meal-list.component";

@Component ({
  selector: "my-app",
  directives: [MealListComponent],
  template:
  `
    <div>
      <h1>Meal List</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Apple Pie", 1000, "It was Dutch apple pie."),
      new Meal("Cheesecake", 550, "It was delicious, and it's made of milk so it has to be healthy!")
    ];
  }
}
