"use strict";
//Basic types 
let organizational_id = 45;
let company_name = "Isaac Pere";
let the_list_published = true;
//typescript has a basic types which is called any
let unkown_variable = "Hello";
//you can also intialzed in typescript
let workers_age;
workers_age = 100;
//intialize an array variable
let the_list_id = [1, 2, 3, 4, 5];
let array_is = [1, true, 'Hello'];
//Tuple
let person_details_list = [1, "Brad", true];
//You can also put turple in an array
let emplyoee_details;
emplyoee_details = [
    [1, "Isaac"],
    [2, "Pere"],
    [3, "Michael"],
];
//unions in typescript
let products_id;
products_id = "22";
//enums 
var direction_1;
(function (direction_1) {
    direction_1[direction_1["Up"] = 0] = "Up";
    direction_1[direction_1["Down"] = 1] = "Down";
    direction_1[direction_1["Left"] = 2] = "Left";
    direction_1[direction_1["Right"] = 3] = "Right";
})(direction_1 || (direction_1 = {}));
console.log(direction_1);
const and_the_user = {
    factory_employess_id_number: 1,
    factory_employess_name: 'John',
};
//we can type assert in two ways
//way number one
let customers_id = 1;
let today_customers_id = customers_id;
//by stating that the variable customers_id as "number" then you type aseet 
let customers_id_2 = 2;
let yesterday_customers_id = customers_id;
//functions typescript
function add_the_numbers(first_number, second_number) {
    return first_number + second_number;
}
function logging_the_answeer(message) {
    console.log(message);
}
const user_one = {
    number_id: 1,
    and_the_name: 'John'
};
//clasees and interface in typescript
class and_the_person {
    constructor(the_id_number_details, the_name_details) {
        this.the_id_number_details = the_id_number_details;
        this.the_name_details = the_name_details;
    }
}
const guess_the_person = new and_the_person(1, "Daddy Good");
console.log(guess_the_person);
// in classes you can specify whether 
//you would want to have public, private or protected objects
