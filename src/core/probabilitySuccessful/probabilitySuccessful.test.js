import probabilitySuccessful from './probabilitySuccessful';

describe('probabilitySuccessful()', () => {
	let deck = [{name: "a2", value: 2},{name: "a3", value: 3}];
	expect.assertions(1);

	test('Ensure it errors if an invalid number is passed', () => 
		expect(probabilitySuccessful(deck, 'a')).rejects.toEqual({msg: 'A valid target value was not supplied', data: 'a'})
	);

	test('Ensure it errors if no deck passed', () => 
		expect(probabilitySuccessful([], 12)).rejects.toEqual({msg: 'A valid deck was not supplied', data: []})
	);

	test('Ensure it errors if deck is not an array', () => 
		expect(probabilitySuccessful({}, 12)).rejects.toEqual({msg: 'A valid deck was not supplied', data: {}})
	);

	test('Returns zero if the target is greater than the remaining values in the deck', () =>
		expect(probabilitySuccessful(deck, 1)).resolves.toBe(0)
	);

	test('Returns a number between 1 and 100 if the target is between the remaining values in the deck', () => 
		expect(probabilitySuccessful(deck, 2)).resolves.toBe(50)
	);

	test('Returns a number between 1 and 100 if the target is between the remaining values, including an array value, in the deck', () => 
		expect(probabilitySuccessful([ ...deck, {name: "a1", value: [1, 11]} ], 2)).resolves.toBe(67)
	);	
})