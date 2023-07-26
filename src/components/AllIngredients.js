
export function AllIngredients({ ingArr, handler }) {
    return (
        <div className='column'>
            <h2>Ingredients</h2>
            <ul>
                {ingArr.map((ing, ind) => {
                    return (
                        <div
                            className='d-flex align-items-center justify-content-between my-2'
                            key={`${ind}Con`}>
                            <li>{ing}</li>
                            <button
                                className='btn btn-sm rounded-circle btn-outline-primary ms-2'
                                value={ing}
                                onClick={handler}> + </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}