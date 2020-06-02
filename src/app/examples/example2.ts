import { Observable } from 'rxjs';

function createObservable(n : number)
{
	return new Observable(observer => {
		for (let i = 0; i < 100; i++) {
			if (i === n) observer.error('Something went wrong');

			observer.next(i);
		}
		observer.complete();
	});
}

createObservable(102).subscribe(
	value => console.log('Observer got value: ' + value),
	error => console.log('Observer got error: ' + error),
	() => console.log('Observer completed!')
);

createObservable(42).subscribe(
	value => console.log('Observer got value: ' + value),
	error => console.log('Observer got error: ' + error),
	() => console.log('Observer completed!')
);
