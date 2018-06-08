import zips from 'zips/data/loc-tree.json'
import { join } from 'path'
import { outputJson } from 'fs-extra'

async function outputCompleteZipCodes(options) {
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

export default outputCompleteZipCodes