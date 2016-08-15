System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var CalorieCountPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalorieCountPipe = (function () {
                function CalorieCountPipe() {
                    this.transform = function (inputMeal, info) {
                        var desiredCalories = info[0];
                        var outputMealArray = [];
                        if (desiredCalories === "lessThan500") {
                            for (var i = 0; i < inputMeal.length; i++) {
                                if (inputMeal[i].calories < 500) {
                                    outputMealArray.push(inputMeal[i]);
                                }
                            }
                            return outputMealArray;
                        }
                        else if (desiredCalories === "500calories") {
                            for (var i = 0; i < inputMeal.length; i++) {
                                if (inputMeal[i].calories === 500) {
                                    outputMealArray.push(inputMeal[i]);
                                }
                            }
                        }
                        else if (desiredCalories === "moreThan500") {
                            for (var i = 0; i < inputMeal.length; i++) {
                                if (inputMeal[i].calories > 500) {
                                    outputMealArray.push(inputMeal[i]);
                                }
                            }
                            return outputMealArray;
                        }
                        else {
                            return inputMeal;
                        }
                        return outputMealArray;
                    };
                }
                CalorieCountPipe = __decorate([
                    core_1.Pipe({
                        name: "calorieCount",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], CalorieCountPipe);
                return CalorieCountPipe;
            }());
            exports_1("CalorieCountPipe", CalorieCountPipe);
        }
    }
});
//# sourceMappingURL=calorie-count.pipe.js.map