# Zip Code Info API

An API for getting city information and coordinates from zip codes. Also includes autocomplete.

## Endpoints

### Information

Endpoint: `https://zip-info-api.netlify.com/complete/{ZIP_CODE}`

Example result:

```json
{
   "city": "Atlanta",
   "state": "GA",
   "lat": 33.8913,
   "long": -84.0746
}
```

### Autocomplete

Endpoint: `https://zip-info-api.netlify.com/partial/{PARTIAL_ZIP_CODE}`

Example result:

```json
[
   {
      "zip": "99901",
      "city": "Ketchikan",
      "state": "AK",
      "lat": 55.372,
      "long": -131.6832
   },
   {
      "zip": "99928",
      "city": "Ward Cove",
      "state": "AK",
      "lat": 55.3954,
      "long": -131.6754
   },
   ...
```

## Building Your Own

### With CLI

#### Installation

With npm:

```bash
npm install --global zip-info-api
```

Or with Yarn:

```bash
yarn global add zip-info-api
```

#### Usage

```bash
zip-info-api build
```

### With Node

#### Installation

With npm:

```bash
npm install --save zip-info-api
```

Or with Yarn:

```bash
yarn add zip-info-api
```

#### Usage

```javascript
var buildApi = require('zip-info-api')

buildApi({
   path: './',
   minimumDigits: 1,
})
```