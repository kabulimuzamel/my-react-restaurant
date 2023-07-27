
export function Categories({ categoryArr, handler, category }) {
    return (
        <div className='container'>
            <h2>Active Category: {category}</h2>
            {categoryArr.map((categ, categInd) => {
                return (
                    <button
                        className='btn btn-outline-danger'
                        value={categ}
                        key={categ}
                        onClick={handler}>
                        {categ}
                    </button>
                )
            })}
        </div>
    )
}