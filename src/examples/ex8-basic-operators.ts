import { from, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const obs1$ = of('a', 'b', 'c').pipe(
	tap(alpha => console.log(alpha)),
	map(alpha => alpha.repeat(10)),
	tap(message => console.log(message)),
	first()
);

const obs2$ = from([1, 2, 3]).pipe(
	tap(value => console.log(value)),
	map(value => value * value * value),
	tap(value => console.log(value))
);


console.log('Observer 1:');
obs1$.subscribe(value => console.log('Observer1 says: ' + value));

console.log('\nObserver 2:');
obs2$.subscribe(value => console.log('Observer2 says: ' + value));
