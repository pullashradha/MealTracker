import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "new-meal",
  outputs: ["onSubmitNewMeal"],
  template:
  `
    <div class="new-meal-form">
      <h2>Create New Meal</h2>
      <h3>Name<input #mealName/></h3>
      <h3>Calories<input #mealCalories/></h3>
      <h3>Notes<textarea #mealNotes></textarea></h3>
      <button (click)="addMeal(mealName, mealCalories, mealNotes)" class="btn-success">Submit</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealCalories: HTMLInputElement, mealNotes: HTMLInputElement) {
    var newMeal: Meal = new Meal(mealName.value, parseInt(mealCalories.value), mealNotes.value);
    this.onSubmitNewMeal.emit(newMeal);
    mealName.value = "";
    mealCalories.value = "";
    mealNotes.value = "";
  }
}
