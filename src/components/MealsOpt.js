
export function MealsOpt({ mealArr, activeMeal }) {
    return (
        <div className='column'>
            <h2>Meals Options</h2>
            <ul>
                {mealArr.map((meal, index) => {
                    return (
                    <li 
                        key={`${index}Meal`}
                        className={activeMeal.includes(meal) ? 'text-bg-success border rounded px-2' : ''}
                    >
                        {meal}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}