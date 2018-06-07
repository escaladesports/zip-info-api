import { join } from 'path'
import { outputJson } from 'fs-extra'
import cities from './object'

const nonAlpha = /[^a-zA-Z0-9]/g

async function outputCompleteCities(options) {
	options = {
		path: `./`,
		...options
	}
	console.log(`Writing complete cities...`)

	await Promise.all(Object.keys(cities).map(city => {
		let name = city
			.toLowerCase()
			.replace(nonAlpha, ``)
		return outputJson(join(options.path, `./city/complete/${name}.json`), cities[city])
	}))
	console.log(`Wrote complete cities`)
}

export default outputCompleteCities