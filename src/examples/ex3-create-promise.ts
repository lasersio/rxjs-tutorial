export function createPromise(n : number) : Promise<number>
{
	return new Promise(resolve => {
		for (let i = 0; i < 10; i++) {
			if (i === n) throw 'Something went wrong';
			resolve(i);
		}
	});
}

createPromise(12).then(
	value => console.log('Promise1 got value: ' + value),
	error => console.log('Promise1 got error: ' + error)
).finally(() => console.log('Promise1 completed!\n'));

createPromise(0).then(
	value => console.log('Promise2 got value: ' + value),
	error => console.log('Promise2 got error: ' + error)
).finally(() => console.log('Promise2 completed!\n'));

