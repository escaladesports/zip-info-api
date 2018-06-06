function TestModule() {
	const def = {
		test: '123'
	}
	const obj = {
		anotherTest: 'abc',
		...def,
	}
	return obj
}

export default TestModule