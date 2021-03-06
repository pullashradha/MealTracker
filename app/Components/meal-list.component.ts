import {Component, EventEmitter} from "angular2/core";
import {Meal} from "../Models/meal.model";
import {MealComponent} from "../Components/meal.component";
import {NewMealComponent} from "../Components/new-meal.component";
import {EditMealComponent} from "../Components/edit-meal.component";
import {CalorieCountPipe} from "../Pipes/calorie-count.pipe";

@Component ({
  selector: "meal-list",
  inputs: ["mealList"],
  outputs: ["onMealSelect"],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CalorieCountPipe],
  template:
  `
    <div class="meal-list">
      <div>
        <h2>Viewing Options</h2>
        <select (change)="onChange($event.target.value)">
          <option selected="selected" value="all">Show All</option>
          <option value="lessThan500">Less Than 500 Calories</option>
          <option value="500calories">500 calories</option>
          <option value="moreThan500">More Than 500 Calories</option>
        </select>
      </div>
      <meal-display *ngFor="#currentMeal of mealList | calorieCount:selectedCalories" (click)="mealClicked(currentMeal)" [meal]="currentMeal"></meal-display>
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
