import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { MealsOpt } from "./MealsOpt";
import { ActiveIngredients } from "./ActiveIngredients";
import { AllIngredients } from "./AllIngredients";
const { displayMeals, displayCategory } = require('../utils/promises');
const { checkForActiveMeals } = require('../utils/logicFunctions');
let stateObject = {};

export function StaticMeal() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [ingredients, setAllIngredients] = useState([]);
    const [activeIngredients, setActiveIngredient] = useState([]);
    const [activeMeal, setActiveMeal] = useState([]);


    // This part displays categories

    useEffect(() => {
        displayCategory(setCategories);
    }, [])

    // This part displays Meals options

    useEffect(() => {
        displayMeals(selectedCategory, setMeals, stateObject, setAllIngredients);
    }, [selectedCategory]);

    
    function selectCategoryHandler(event) {
        stateObject = {};
        setAllIngredients([]);
        setActiveIngredient([]);
        setSelectedCategory(event.target.value);
    }

    function selectActiveIngredientHandler(event) {
        if(!activeIngredients.includes(event.target.value)) {
            setActiveIngredient(prev => [...prev, event.target.value]);
            const actIngArr = [...activeIngredients, event.target.value];
            const actMealArr = checkForActiveMeals(stateObject, actIngArr);
            setActiveMeal(actMealArr);
        }    
    }

    function removeActIngHandler(event) {
        const toRemoveIng = event.target.value;
        const filteredIngArr = activeIngredients.filter(ing => {
            return ing !== toRemoveIng;
        });
        setActiveIngredient(filteredIngArr);
        const actMealArr = checkForActiveMeals(stateObject, filteredIngArr);
        setActiveMeal(actMealArr);
    } 

    return (
        <div>
            <Categories categoryArr={categories} handler={selectCategoryHandler} />
            <div className="d-flex justify-content-between container">
                <MealsOpt mealArr={meals} />
                <ActiveIngredients actIngArr={activeIngredients} handler={removeActIngHandler} />
                <AllIngredients ingArr={ingredients} handler={selectActiveIngredientHandler} />
            </div>
        </div>
    )
}