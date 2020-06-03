import { from, Observable, of, range } from 'rxjs';

export const obs1$ = of(1, 2, 3);
export const obs2$ = from([1, 2, 3]);
export const obs3$ = range(1, 3);


export const subscribe = (obs$ : Observable<number>, name : string) =>
	obs$.subscribe(
		value => console.log(`${name} got value: ${value}`),
		error => console.log(`${name} got error: ${error}`),
		() => console.log(`${name} completed!\n`)
	);


subscribe(obs1$, 'Observer1');
subscribe(obs2$, 'Observer2');
subscribe(obs3$, 'Observer3');

