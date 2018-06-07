import { join } from 'path'
import { outputJson } from 'fs-extra'
import cities from './object'

const nonAlpha = /[^a-zA-Z0-9]/g

async function outputCompleteCities(options) {
	options = {
		minimumDigits: 1,
		path: `./`,
		...options
	}
	const minimum = options.minimumDigits - 1
	console.log(`Writing partial cities...`)

	const partials = {}
	for (let city in cities) {
		let arr = cities[city]
		let name = city
			.toLowerCase()
			.replace(nonAlpha, ``)


		let digits = name.split(``)
		let key = ``
		for (let i = 0; i < digits.length; i++) {
			key += digits[i]
			if (i < minimum) continue
			if (!(key in partials)) {
				partials[key] = []
			}
			partials[key].push(arr)
		}
	}

	await Promise.all(Object.keys(partials).map(key => {
		return outputJson(join(options.path, `./city/partial/${key}.json`), partials[key])
	}))
	console.log(`Wrote partial cities`)
}

export default outputCompleteCities