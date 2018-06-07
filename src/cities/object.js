import zips from 'zips/data/loc-tree.json'

// Get all zips for all cities
const cities = {}
zips.index.map(obj => {
	const { city, state } = obj
	if (!(city in cities)) {
		cities[city] = {}
	}
	if (!(state in cities[city])) {
		cities[city][state] = {
			city,
			state,
			zipCodes: [],
			lat: [],
			long: [],
		}
	}
	cities[city][state].zipCodes.push(obj.zip)
	cities[city][state].lat.push(Number(obj.lat))
	cities[city][state].long.push(Number(obj.long))
})

for (let city in cities) {
	// Average lat/lng and convert to array
	let arr = []
	for (let state in cities[city]) {
		cities[city][state].lat = avg(cities[city][state].lat)
		cities[city][state].long = avg(cities[city][state].long)
		arr.push(cities[city][state])
	}
	cities[city] = arr
}

function avg(arr){
	let sum = 0
	let len = arr.length
	for(let i = len; i--;){
		sum += arr[i]
	}
	return sum / len
}

export default cities