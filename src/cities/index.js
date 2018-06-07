import outputComplete from './complete'
import outputPartial from './partial'

async function outputCities(options){
	console.log(`Writing cities...`)
	await Promise.all([
		outputComplete(options),
		outputPartial(options),
	])
	console.log(`Wrote cities`)
}

export default outputCities