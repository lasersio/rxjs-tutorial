
import { Subject } from 'rxjs';

const subject = new Subject<number>();

const subscription = subject.subscribe(value => console.log('obs1: ' + value));

subject.next(1);
subject.next(2);

subject.subscribe(value => console.log('obs2: ' + value));

subject.next(3);
subject.next(4);

subscription.unsubscribe();

subject.next(5);

subject.complete();
subject.error('Oops');







