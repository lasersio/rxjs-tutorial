function createPromise(n : number) : Promise<number>
{
	return new Promise(resolve => {
		for (let i = 0; i < 10; i++) {
			if (i === n) throw 'Something went wrong';
			resolve(i);
		}
	});
}

createPromise(12).then(
	value => console.log('Promise got value: ' + value),
	error => console.log('Promise got error: ' + error)
).finally(() => console.log('Promise completed!\n'));

createPromise(0).then(
	value => console.log('Promise got value: ' + value),
	error => console.log('Promise got error: ' + error)
).finally(() => console.log('Promise completed!\n'));

