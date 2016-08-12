import {Pipe, PipeTransform} from "angular2/core";
import {Meal} from "./meal.model";

@Pipe ({
  name: "calorie-count",
  pure: false
})

export class CalorieCountPipe implements PipeTransform {
  transform = function (input: Meal[], info) {
    var desiredCalories = info[0];
    var outputArray: Meal[] = [];
    if (desiredCalories === "lessThan500") {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calorieCount === true) {
          outputArray.push(input[i]);
        }
      }
      return outputArray;
    } else if (desiredCalories === "moreThan500") {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calorieCount === false) {
          outputArray.push(input[i]);
        }
      }
      return outputArray;
    } else {
      return input;
    }
  }
}
