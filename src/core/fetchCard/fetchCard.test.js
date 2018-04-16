import fetchCard from './fetchCard';

describe('fetchCard()', () => {
	let deck = [{name: "a2", value: 2},{name: "a3", value: 3},{name: "s4", value: 4}];
	expect.assertions(1);

	test('Ensure it errors if no deck passed', () => 
		expect(fetchCard([], 2)).rejects.toEqual({msg: 'No deck was provided', data: []})
	);

	test('Ensure it errors if no index was passed', () => 
		expect(fetchCard(deck)).rejects.toEqual({msg: 'No index was supplied', data: -1})
	);

	test('Ensure it errors if the index is not found', () => 
		expect(fetchCard(deck, 10)).rejects.toEqual({msg: 'No deck was provided', data: []})
	);

	// test('Ensure it errors if an invalid number is passed to min', () => 
	// 	expect(fetchCard(4, 'a')).rejects.toEqual({msg: 'Min is not a number', data: 'a'})
	// );

	// test('Ensure it errors if the max is greater than the min', () => 
	// 	expect(fetchCard(4, 5)).rejects.toEqual({msg: 'Max must be greater than min', data: {max: 4, min: 5} })
	// );

	// test('Returns a number less than 51', () => 
	// 	expect(fetchCard(51, 0)).resolves.toBeLessThanOrEqual(51)
	// );	

	// test('Returns a number greater than 0', () => 
	// 	expect(fetchCard(51, 0)).resolves.toBeGreaterThanOrEqual(0)
	// );
})