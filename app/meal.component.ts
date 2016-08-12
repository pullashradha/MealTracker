import {Component, EventEmitter} from "angular2/core";
import {Meal} from "./meal.model";

@Component ({
  selector: "meal-display",
  inputs: ["meal"],
  template:
  `
    <div class="meal">
      <h2>{{meal.name}}</h2>
      <h2>{{meal.calories}}</h2>
      <h2>{{meal.notes}}</h2>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
