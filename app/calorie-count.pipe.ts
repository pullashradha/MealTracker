import {Pipe, PipeTransform} from "angular2/core";
import {Meal} from "./meal.model";

@Pipe ({
  name: "calorie-count",
  pure: false
})

export class CalorieCountPipe implements PipeTransform {
  transform = function (input: Meal[], info) {
    var desiredCalories = info[0];
    var output: Meal[] = [];
    if (desiredCalories === "lessThan500") {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calorieCount === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "moreThan500") {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calorieCount === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
