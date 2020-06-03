export function createPromise() : Promise<string>
{
	return new Promise(resolve => {
		console.log('Started');
		resolve('Reply');
	});
}

export const promise = createPromise();

console.log('Attaching to promises');

promise.then(
	value => console.log('Promise1 got value: ' + value),
	error => console.log('Promise1 got error: ' + error)
).finally(() => console.log('Promise1 completed!\n'));

promise.then(
	value => console.log('Promise2 got value: ' + value),
	error => console.log('Promise2 got error: ' + error)
).finally(() => console.log('Promise2 completed!\n'));

