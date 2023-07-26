
export function Categories({ categoryArr, handler }) {
    return (
        <div className='container'>
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