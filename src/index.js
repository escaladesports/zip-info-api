import zips from 'zips/data/loc-tree.json'
import { join } from 'path'
import { outputJson } from 'fs-extra'

// Create partials

async function outputZipCodes(options){
	console.log(`Writing zip codes...`)
	await Promise.all([
		outputCompleteZipCodes(options),
		outputPartialZipCodes(options),
	])
	console.log(`Wrote zip codes`)
}

async function outputCompleteZipCodes() {
	options = {
		path: `./`,
		...options
	}
	console.log(`Writing complete zip codes...`)
	await Promise.all(zips.index.map(fileObj => {
		let obj = { ...fileObj }
		let zip = obj.zip
		delete obj.zip
		return outputJson(join(options.path, `./complete/${zip}.json`), obj)
	}))
	console.log(`Wrote complete zip codes`)
}

async function outputPartialZipCodes(options){
	options = {
		minimumDigits: 2,
		path: `./`,
		...options
	}
	console.log(`Writing partial zip codes...`)
	const partials = {}
	zips.index.forEach(obj => {
		let digits = obj.zip.split(``)
		let key = ``
		for (let i = options.minimumDigits; i < digits.length; i++) {
			key += digits[i]
			if (!(key in partials)) {
				partials[key] = []
			}
			partials[key].push(obj)
		}
	})
	await Promise.all(Object.keys(partials).map(key => {
		return outputJson(join(options.path, `./partial/${key}.json`), partials[key])
	}))
	console.log(`Wrote partial zip codes`)
}

outputZipCodes({
	path: `./dist-json`
})