import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";
import {MealComponent} from "./meal.component";
import {NewMealComponent} from "./new-meal.component";

@Component ({
  selector: "meal-list",
  inputs: ["mealList"],
  directives: [MealComponent, NewMealComponent],
  template:
  `
    <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal"></meal-display>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  createMeal(meal):void {
    this.mealList.push(new Meal(meal.name, meal.calories, meal.notes));
  }
}
