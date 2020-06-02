import { Observable } from 'rxjs';

export function createObservable()
{
	return new Observable(observer => {
		console.log('Started');
		observer.next('Reply');
		observer.complete();
	});
}

const obs$ = createObservable();

console.log('Attaching to observables');

obs$.subscribe(
	value => console.log('Observer1 got value: ' + value),
	error => console.log('Observer1 got error: ' + error),
	() => console.log('Observer1 completed!\n')
);

obs$.subscribe(
	value => console.log('Observer2 got value: ' + value),
	error => console.log('Observer2 got error: ' + error),
	() => console.log('Observer2 completed!\n')
);
