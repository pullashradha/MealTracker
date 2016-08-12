import {Component} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "edit-meal",
  inputs: ["meal"],
  template:
  `
    <div class="edit-meal">
      <h2>Edit Meal</h2>
      <h3>Name<input [(ngModel)]="meal.name"/></h3>
      <h3>Calories<input [(ngModel)]="meal.calories"/></h3>
      <h3>Notes<textarea [(ngModel)]="meal.notes"></textarea></h3>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
