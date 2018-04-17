import fetchCard from './fetchCard';

describe('fetchCard()', () => {
	const deck = [{name: "a2", value: 2},{name: "a3", value: 3},{name: "s4", value: 4}];
	expect.assertions(1);

	test('Ensure it errors if no deck passed', async () => 
		await expect(fetchCard([], 2)).rejects.toEqual(new Error({msg: 'No deck was provided', data: []}))
	);

	test('Ensure it errors if no index was passed', async () => 
		await expect(fetchCard(deck)).rejects.toEqual(new Error({msg: 'An invalid index was supplied', data: -1}))
	);

	test('Ensure it errors if a promise is rejected', async () => {
		const idxMock = () => {
			return new Promise((res, rej) => {
				return rej();
			})
		}

		await expect(fetchCard(deck)).rejects.toEqual(new Error({msg: 'An invalid index was supplied', data: -1}))
	});

	test('Ensure it errors if the index is not found', async () => 
		await expect(fetchCard(deck, 10)).rejects.toEqual(new Error({msg: 'The index was outside the range of the array', data: 10}))
	);

	test('Ensure it succeeds if a promise is passed as the index', async () => {
		const idxMock = () => {
			return new Promise((res, rej) => {
				return res(2);
			})
		}
		await expect(fetchCard(deck, idxMock)).resolves.toEqual([{name: "s4", value: 4}])
	});

	test('Ensure it succeeds if a valid number is passed as the index', async () => 
		await expect(fetchCard(deck, 1)).resolves.toEqual([{name: "a3", value: 3}])
	);	
})