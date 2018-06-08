import outputComplete from './complete'
import outputPartial from './partial'

async function outputZipCodes(options){
	console.log(`Writing zip codes...`)
	await Promise.all([
		outputComplete(options),
		outputPartial(options),
	])
	console.log(`Wrote zip codes`)
}

export default outputZipCodes