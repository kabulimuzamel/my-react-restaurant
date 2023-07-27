const { allIng, returnCountingArr } = require('../utils/promises')

export function IngredientScale() {
	const sortedFreqCountArr = returnCountingArr(allIng)
	const maxCount = Math.max(...sortedFreqCountArr)
    const styleArr = sortedFreqCountArr.map((count) => {
        const ratio = maxCount / count
        return {
            width: '2rem',
            height: '2rem',
            filter: `brightness(${ratio + 1})`,
            backgroundColor: 'green',
        }
    })
	
	return (
        <div className='d-flex justify-content-between container'>
            <h3>Less frequent</h3>
            <div className='d-flex'>
                {styleArr.map((style, index) => {
                    return <div key={`${index}FS`} style={style}></div>
                })}
            </div>
            <h3>More frequent</h3>	
        </div>
	)
}
