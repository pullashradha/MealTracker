import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";
import {MealComponent} from "./meal.component";
import {NewMealComponent} from "./new-meal.component";
import {EditMealComponent} from "./edit-meal.component";

@Component ({
  selector: "meal-list",
  inputs: ["mealList"],
  outputs: ["onMealSelect"],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template:
  `
    <div class="meal-list">
      <meal-display *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)" [meal]="currentMeal"></meal-display>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal(meal):void {
    this.mealList.push(new Meal(meal.name, meal.calories, meal.notes));
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
