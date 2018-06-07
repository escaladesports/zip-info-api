import outputCompleteZipCodes from './complete-zips'
import outputPartialZipCodes from './partial-zips'

async function outputZipCodes(options){
	console.log(`Writing zip codes...`)
	await Promise.all([
		outputCompleteZipCodes(options),
		outputPartialZipCodes(options),
	])
	console.log(`Wrote zip codes`)
}