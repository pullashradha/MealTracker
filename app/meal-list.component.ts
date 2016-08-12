import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";
import {MealComponent} from "./meal.component";
import {NewMealComponent} from "./new-meal.component";
import {EditMealComponent} from "./edit-meal.component";
import {CalorieCountPipe} from "./calorie-count.pipe";

@Component ({
  selector: "meal-list",
  inputs: ["mealList"],
  outputs: ["onMealSelect"],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CalorieCountPipe],
  template:
  `
    <div class="meal-list">
      <select (change)="onChange($event.target.value)">
        <option selected="selected" value="all">Show All</option>
        <option value="lessThan500">Less Than 500 Calories</option>
        <option value="moreThan500">More Than 500 Calories</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | caloriecount:selectedCalories" (click)="mealClicked(currentMeal)" [meal]="currentMeal"></meal-display>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
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
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
