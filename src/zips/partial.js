import zips from 'zips/data/loc-tree.json'
import { join } from 'path'
import { outputJson } from 'fs-extra'

async function outputPartialZipCodes(options){
	options = {
		minimumDigits: 1,
		path: `./`,
		...options
	}
	const minimum = options.minimumDigits - 1
	console.log(`Writing partial zip codes...`)
	const partials = {}
	zips.index.forEach(obj => {
		let digits = obj.zip.split(``)
		let key = ``
		for (let i = 0; i < digits.length; i++) {
			key += digits[i]
			if (i < minimum) continue
			if (!(key in partials)) {
				partials[key] = []
			}
			partials[key].push(obj)
		}
	})
	await Promise.all(Object.keys(partials).map(key => {
		return outputJson(join(options.path, `./zip/partial/${key}.json`), partials[key])
	}))
	console.log(`Wrote partial zip codes`)
}

export default outputPartialZipCodes