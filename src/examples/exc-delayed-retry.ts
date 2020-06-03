import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

const maxRetry = 5;

export function delayedRetry(delayMs : number)
{
	let retries = 0;

	return (obs$ : Observable<any>) =>
		obs$.pipe(
			retryWhen((errors : Observable<any>) =>
				errors.pipe(
					delay(delayMs),
					mergeMap(error => {
						return retries++ < maxRetry ? of(error) : throwError(`Failed: Max retry count reached.`);
					})
				)
			)
		);
}
