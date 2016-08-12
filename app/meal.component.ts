import {Component} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "meal-display",
  inputs: ["meal"],
  template:
  `
    <div class="meal">
      <h2>{{meal.name}}</h2>
      <h3 class="col-xs-3">Calories = {{meal.calories}}</h3>
      <h3 class="col-xs-4">Less than 500 calories?<input checked type="checkbox" *ngIf="meal.calorieCount === true" (click)="toggleCalorieCount(false)"/>
      <input type="checkbox" *ngIf="meal.calorieCount === false" (click)="toggleCalorieCount(true)"/></h3>
      <h3 class="col-xs-5">{{meal.notes}}</h3>
      <button class="btn btn-warning">Edit</button>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
  toggleCalorieCount(setCalories: boolean) {
    this.meal.calorieCount = setCalories;
  }
}
