import {Pipe, PipeTransform} from "angular2/core";
import {Meal} from "../Models/meal.model";

@Pipe ({
  name: "calorieCount",
  pure: false
})

export class CalorieCountPipe implements PipeTransform {
  transform = function (inputMeal: Meal[], info) {
    var desiredCalories = info[0];
    var outputMealArray: Meal[] = [];
    if (desiredCalories === "lessThan500") {
      for (var i = 0; i < inputMeal.length; i ++) {
        if (inputMeal[i].calories < 500) {
          outputMealArray.push(inputMeal[i]);
        }
      }
      return outputMealArray;
    } else if (desiredCalories === "500calories") {
      for (var i = 0; i <inputMeal.length; i ++) {
        if (inputMeal[i].calories === 500) {
          outputMealArray.push(inputMeal[i]);
        }
      }
    } else if (desiredCalories === "moreThan500") {
      for (var i = 0; i < inputMeal.length; i ++) {
        if (inputMeal[i].calories > 500) {
          outputMealArray.push(inputMeal[i]);
        }
      }
      return outputMealArray;
    } else {
      return inputMeal;
    }
    return outputMealArray;
  }
}
