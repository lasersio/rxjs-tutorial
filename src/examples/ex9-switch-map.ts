import { from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const obs1$ = from([1, 2, 3]).pipe(
	map(value => value * value * value)
);

const obs2$ = from([1, 2, 3]).pipe(
	switchMap(value => of(value * value * value))
);

obs1$.subscribe(value => console.log('Observer1 says: ' + value));
obs2$.subscribe(value => console.log('Observer2 says: ' + value));

