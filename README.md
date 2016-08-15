# Meal Tracker Webpage

#### Angular JS Independent Project for Epicodus, 08/12/2016

#### By Shradha Pulla

## Description

This program is a web app that allows a user to track their meals for the day. The user can input the name of the food, calories, and any notes regarding each meal. This program allows for basic data manipulation such as: editing a meal entry, and viewing all meals within a calorie range (<500 or >500 calories).

## Setup/Installation Requirements

This program can only be accessed on computer with Git, Atom, npm, bower, gulp, and typescript globally installed.

* Clone this repository
* To set up package managers, type the following into the command line:
  * $ npm install
  * $ bower install
* To view the webpage, type the following:
  * $ gulp build
  * $ gulp server

## Known Bugs

No known bugs.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
Input name, calories & notes for each new meal | Meals: 0, Create New Meal: "Cheesecake", 550, "It was delicious, and it's made of milk so it has to be healthy!" | Meals: 1
Update a meal entry (name, calories & notes) when meal details are clicked | Cheesecake: Calories = 550, click on "Calories = 550" | Cheesecake: Calories = 450
View all meals | Meals: 2 | Meal Tracker: Apple Pie, Mini Mac & Cheese, Cheesecake
View all meals less than 500 calories | Meals: 3 | Meals: 1, Cheesecake
View all meals exactly 500 calories | Meals: 3 | Meals: 1, Mini Mac & Cheese
View all meals more than 500 calories | Meals: 3 | Meals: 1, Apple Pie

## Future Features

HTML | CSS | JavaScript/Angular2
----- | ----- | -----
--- | Add space between meal-list & new-meal form | Make edit-meal form disappear once the Done button (new) is clicked
--- | --- | Add a button to edit individual meals, instead of the entire entry being clickable
--- | --- | Add a button to delete one meal from the list

## Support and Contact Details

Contact Epicodus for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript
* TypeScript
* Angular2

## Links

* Git Hub Repository: https://github.com/pullashradha/MealTracker

## License

*This software is licensed under the GPL license.*

Copyright (c) 2016 Shradha Pulla
