import zips from 'zips/data/loc-tree.json'
import { outputJson } from 'fs-extra'

async function outputZipCodes(){
	await Promise.all(zips.index.map(obj => {
		let zip = obj.zip
		delete obj.zip
		return outputJson(`./dist-json/${zip}.json`, obj)
	}))
}
outputZipCodes()