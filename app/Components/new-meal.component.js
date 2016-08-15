System.register(["angular2/core", "../Models/meal.model"], function(exports_1, context_1) {
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
    var core_1, meal_model_1;
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.onSubmitNewMeal = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addMeal = function (mealName, mealCalories, mealNotes) {
                    var newMeal = new meal_model_1.Meal(mealName.value, parseInt(mealCalories.value), mealNotes.value);
                    this.onSubmitNewMeal.emit(newMeal);
                    mealName.value = "";
                    mealCalories.value = "";
                    mealNotes.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: "new-meal",
                        outputs: ["onSubmitNewMeal"],
                        template: "\n    <form class=\"new-meal form-group\">\n      <h2>Create New Meal</h2>\n      <h3 class=\"col-xs-6\">Name<input required #mealName class=\"form-control\"/></h3>\n      <h3 class=\"col-xs-6\">Calories<input required #mealCalories class=\"form-control\"/></h3>\n      <h3>Notes<textarea required #mealNotes class=\"form-control\"></textarea></h3>\n      <button (click)=\"addMeal(mealName, mealCalories, mealNotes)\" type=\"submit\" class=\"btn btn-success\">Add</button>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map