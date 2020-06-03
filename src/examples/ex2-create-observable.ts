import { Observable } from 'rxjs';

export function createObservable(n : number)
{
	return new Observable(observer => {
		for (let i = 0; i < 10; i++) {
			if (i === n) observer.error('Something went wrong');

			observer.next(i);
		}
		observer.complete();
	});
}

createObservable(12).subscribe(
	value => console.log('Observer1 got value: ' + value),
	error => console.log('Observer1 got error: ' + error),
	() => console.log('Observer1 completed!\n')
);

createObservable(2).subscribe(
	value => console.log('Observer2 got value: ' + value),
	error => console.log('Observer2 got error: ' + error),
	() => console.log('Observer2 completed!\n')
);
