import {Component} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "meal-display",
  inputs: ["meal"],
  template:
  `
    <div class="meal">
      <h2>{{meal.name}}</h2>
      <h3 class="col-xs-6">Calories: {{meal.calories}}</h3>
      <input checked type="checkbox" *ngIf="meal.calorieCount === true" (click)="toggleCalorieCount(false)"/>
      <input type="checkbox" *ngIf="meal.calorieCount === false" (click)="toggleCalorieCount(true)"/>
      <h3 class="col-xs-6">{{meal.notes}}</h3>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
  toggleCalorieCount(setCalories: boolean) {
    this.meal.calorieCount = setCalories;
  }
}
