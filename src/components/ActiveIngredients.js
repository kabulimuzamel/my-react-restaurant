
export function ActiveIngredients({ actIngArr, handler }) {
    return (
        <div className='column'>
            <h2>Active Ingredients</h2>
            <ul>
                {actIngArr.map((ing, ind) => {
                    return (
                        <div
                            className='d-flex justify-content-between align-items-center my-2'
                            key={`${ind}ConR`}>
                            <li className="border border rounded bg-info px-2">{ing}</li>
                            <button
                                className='btn btn-sm rounded-circle btn-outline-danger ms-2'
                                value={ing}
                                onClick={handler}
                            > - </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}