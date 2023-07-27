
const allIng = [];

async function displayMeals( selectedCategory, setMeals, stateObject, setAllIngredients ) {
    if (selectedCategory !== '') {
        const fetchMealsData = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        )
        const mealsObject = await fetchMealsData.json()

        setMeals(
            mealsObject.meals.map((resObj) => {
                return resObj.strMeal
            })
        )

        // This part renders ingredients

        const ingArr = [];
        renderIngredient(mealsObject, stateObject, ingArr);
        setTimeout(() => {
            const filteredIngArr = ingArr.filter((ing, ind) => {
                return ingArr.indexOf(ing) === ind;
            })
            setAllIngredients(filteredIngArr)
            const ingFArr = returnCountingArr(allIng);
            console.log(ingFArr);
            console.log(stateObject)
        }, 1000)
    }
}


function renderIngredient(mealsObject, stateObject, ingArr) {
    mealsObject.meals.forEach((resObj) => {
        stateObject[resObj.strMeal] = [];
        fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${resObj.idMeal}`
        )
            .then((res) => res.json())
            .then((ingredientObj) => {
                for (let i = 1; i < 21; i++) {
                    let ingredient = ingredientObj.meals[0][`strIngredient${i}`]
                    if (ingredient !== '' && ingredient !== null) {
                        stateObject[resObj.strMeal].push(ingredient)
                        ingArr.push(ingredient)
                        allIng.push(ingredient)
                    }
                }
            })
    })   
}

function returnCountingArr(allIng) {
	const ingObj = {};
    allIng.forEach(ing => {
        if(ingObj[ing]) {
            ingObj[ing] += 1;
        } else {
            ingObj[ing] = 1;
        }
    });
    const fNA = Object.values(ingObj);
    const frequentNumbersArray = fNA.filter((ing, ind) => {
        return fNA.indexOf(ing) === ind;
    })
    return frequentNumbersArray.sort((a, b) => a - b);
}

function displayCategory(setCategories) {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((res) => res.json())
        .then((resObj) =>
            setCategories(
                resObj.categories.map((obj) => {
                    return obj.strCategory
                })
            )
        )
        .catch((err) => console.log(err))
}

module.exports = {
    displayMeals: displayMeals,
    displayCategory: displayCategory, 
    allIng: allIng,
    returnCountingArr: returnCountingArr
};