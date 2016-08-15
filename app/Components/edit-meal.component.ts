import {Component} from "angular2/core";
import {Meal} from "../Models/meal.model";

@Component ({
  selector: "edit-meal",
  inputs: ["meal"],
  template:
  `
    <div class="edit-meal">
      <h2>Edit Meal</h2>
      <h3 class="col-xs-6">Name<input required [(ngModel)]="meal.name" class="form-control"/></h3>
      <h3 class="col-xs-6">Calories<input required [(ngModel)]="meal.calories" class="form-control"/></h3>
      <h3>Notes<textarea required [(ngModel)]="meal.notes" class="form-control"></textarea></h3>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
