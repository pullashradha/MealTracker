System.register(["angular2/core", "../Models/meal.model", "../Components/meal.component", "../Components/new-meal.component", "../Components/edit-meal.component", "../Pipes/calorie-count.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_model_1, meal_component_1, new_meal_component_1, edit_meal_component_1, calorie_count_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (edit_meal_component_1_1) {
                edit_meal_component_1 = edit_meal_component_1_1;
            },
            function (calorie_count_pipe_1_1) {
                calorie_count_pipe_1 = calorie_count_pipe_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.selectedCalories = "all";
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.createMeal = function (meal) {
                    this.mealList.push(new meal_model_1.Meal(meal.name, meal.calories, meal.notes));
                };
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealListComponent.prototype.onChange = function (optionFromMenu) {
                    this.selectedCalories = optionFromMenu;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: "meal-list",
                        inputs: ["mealList"],
                        outputs: ["onMealSelect"],
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent, edit_meal_component_1.EditMealComponent],
                        pipes: [calorie_count_pipe_1.CalorieCountPipe],
                        template: "\n    <div class=\"meal-list\">\n      <div>\n        <h2>Viewing Options</h2>\n        <select (change)=\"onChange($event.target.value)\">\n          <option selected=\"selected\" value=\"all\">Show All</option>\n          <option value=\"lessThan500\">Less Than 500 Calories</option>\n          <option value=\"500calories\">500 calories</option>\n          <option value=\"moreThan500\">More Than 500 Calories</option>\n        </select>\n      </div>\n      <meal-display *ngFor=\"#currentMeal of mealList | calorieCount:selectedCalories\" (click)=\"mealClicked(currentMeal)\" [meal]=\"currentMeal\"></meal-display>\n      <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n      <edit-meal *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\"></edit-meal>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map