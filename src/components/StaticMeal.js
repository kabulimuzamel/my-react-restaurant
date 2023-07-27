import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { MealsOpt } from "./MealsOpt";
import { ActiveIngredients } from "./ActiveIngredients";
import { AllIngredients } from "./AllIngredients";
import { IngredientScale } from "./IngredientScale";
const { displayMeals, displayCategory, allIng } = require('../utils/promises');
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
        if(event.target.value === selectedCategory) {
            alert(`You have already selected ${event.target.value}`)
        } else {
            allIng.length = 0;
            stateObject = {};
            setAllIngredients([]);
            setActiveIngredient([]);
            setMeals([]);
            setActiveMeal([]);
            setSelectedCategory(event.target.value)
        }
    }

    function selectActiveIngredientHandler(event) {
        if(!activeIngredients.includes(event.target.value)) {
            setActiveIngredient(prev => [...prev, event.target.value]);
            setAllIngredients(prev => prev.filter((ing) => {
                return ing !== event.target.value;
            }))
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
        setAllIngredients((prev) => [...prev, toRemoveIng])
        const actMealArr = checkForActiveMeals(stateObject, filteredIngArr);
        setActiveMeal(actMealArr);
    } 

    return (
        <div>
            <Categories categoryArr={categories} handler={selectCategoryHandler} category={selectedCategory}/>
            <IngredientScale />
            <div className="d-flex justify-content-between container">
                <MealsOpt mealArr={meals}  activeMeal={activeMeal} />
                <ActiveIngredients actIngArr={activeIngredients} handler={removeActIngHandler} />
                <AllIngredients ingArr={ingredients} handler={selectActiveIngredientHandler}/>
            </div>
        </div>
    )
}