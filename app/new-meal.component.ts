import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "new-meal",
  outputs: ["onSubmitNewMeal"],
  template:
  `
    <form class="new-meal form-group">
      <h2>Create New Meal</h2>
      <h3 class="col-xs-6">Name<input required #mealName class="form-control"/></h3>
      <h3 class="col-xs-6">Calories<input required #mealCalories class="form-control"/></h3>
      <h3>Notes<textarea required #mealNotes class="form-control"></textarea></h3>
      <button (click)="addMeal(mealName, mealCalories, mealNotes)" type="submit" class="btn btn-success">Submit</button>
    </form>
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
