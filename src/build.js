import outputZips from './zips'
import outputCities from './cities'

async function build(options){
	await Promise.all([
		outputZips(options),
		outputCities(options),
	])
}

export default build