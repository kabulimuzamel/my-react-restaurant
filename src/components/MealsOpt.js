
export function MealsOpt({ mealArr }) {
    return (
        <div className='column'>
            <h2>Meals Options</h2>
            <ul>
                {mealArr.map((meal, index) => {
                    return <li key={`${index}Meal`}>{meal}</li>
                })}
            </ul>
        </div>
    )
}