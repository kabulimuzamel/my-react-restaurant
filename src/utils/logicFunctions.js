
function checkForActiveMeals(stateObject, actIngArr) {
    let actMealArr = []
    for (let mealKey in stateObject) {
        let trackIngNotInc = true
        stateObject[mealKey].forEach((mealIng) => {
            if (!actIngArr.includes(mealIng)) {
                trackIngNotInc = false
            }
        })
        if (trackIngNotInc) {
            actMealArr.push(mealKey)
            console.log(mealKey)
        }
    }
    console.log(actMealArr)
    return actMealArr;
}



module.exports = {
    checkForActiveMeals: checkForActiveMeals,
}