import { Observable, of } from 'rxjs';

const getCold$ = () => new Observable(observer => {
	observer.next(Math.random());
	observer.complete();
});

getCold$().subscribe(value => console.log('Cold observable1: ' + value));
getCold$().subscribe(value => console.log('Cold observable2: ' + value));

const hotObs$ = of(Math.random());

hotObs$.subscribe(value => console.log('Hot observable1: ' + value));
hotObs$.subscribe(value => console.log('Hot observable2: ' + value));


