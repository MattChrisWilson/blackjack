import fetchPosition from './fetchPosition';

describe('fetchPosition()', () => {
	expect.assertions(1);

	test('Ensure it errors if an invalid number is passed to max', () => 
		expect(fetchPosition('a')).rejects.toEqual({msg: 'Max is not a number', data: 'a'})
	);

	test('Ensure it errors if an invalid number is passed to min', () => 
		expect(fetchPosition(4, 'a')).rejects.toEqual({msg: 'Min is not a number', data: 'a'})
	);

	test('Ensure it errors if the max is greater than the min', () => 
		expect(fetchPosition(4, 5)).rejects.toEqual({msg: 'Max must be greater than min', data: {max: 4, min: 5} })
	);

	test('Returns a number less than 51', () => 
		expect(fetchPosition(51, 0)).resolves.toBeLessThanOrEqual(51)
	);	

	test('Returns a number greater than 0', () => 
		expect(fetchPosition(51, 0)).resolves.toBeGreaterThanOrEqual(0)
	);
})