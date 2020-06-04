import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
	selector    : 'app-error-example',
	templateUrl : './error-example.component.html',
	styleUrls   : ['./error-example.component.scss']
})
export class ErrorExampleComponent implements OnInit {
	public wrongValue = false;
	public value : number = 1;

	public message : string = '';
	public messageImmediateRecovery : string = '';
	public messageLateRecovery : string = '';

	constructor()
	{
	}

	ngOnInit()
	{
	}

	public updateValue()
	{
		this.update(7).pipe(
			map(value => 'All good for ' + value)
		).subscribe(
			message => this.message = message,
			error => this.message = 'ERROR: ' + error
		);

		this.recoveryBruteForce().pipe(
			map(value => 'All good for ' + value)
		).subscribe(
			message => this.messageImmediateRecovery = message,
			error => this.messageImmediateRecovery = 'ERROR: ' + error
		);

		this.recoveryLateBruteForce().pipe(
			map(value => 'All good for ' + value)
		).subscribe(
			message => this.messageLateRecovery = message,
			error => this.messageLateRecovery = 'ERROR: ' + error
		);
	}

	private update(n : number) : Observable<number>
	{
		if (n === 1) return of(this.value);

		return this.update(n - 1).pipe(
			map(value => {
				if (value % n) return value;
				throw 'is dividable by ' + n;
			})
		);
	}

	private bruteForce() : Observable<number>
	{
		return of(this.value).pipe(
			map(value => {
				if (value % 2) return value;
				throw 'is dividable by 2';
			}),
			map(value => {
				if (value % 3) return value;
				throw 'is dividable by 3';
			}),
			map(value => {
				if (value % 4) return value;
				throw 'is dividable by 4';
			}),
			map(value => {
				if (value % 5) return value;
				throw 'is dividable by 5';
			}),
			map(value => {
				if (value % 6) return value;
				throw 'is dividable by 6';
			}),
			map(value => {
				if (value % 7) return value;
				throw 'is dividable by 7';
			})
		);
	}

	private recoveryBruteForce() : Observable<number>
	{
		// here we are able to recover from intermediate error
		return of(this.value).pipe(
			map(value => {
				if (value % 2) return value;
				throw 'is dividable by 2';
			}),
			map(value => {
				if (value % 3) return value;
				throw 'is dividable by 3';
			}),
			catchError(error => {
				if (error === 'is dividable by 3') return of(this.value);
				throw error;
			}),
			map(value => {
				if (value % 4) return value;
				throw 'is dividable by 4';
			}),
			map(value => {
				if (value % 5) return value;
				throw 'is dividable by 5';
			}),
			map(value => {
				if (value % 6) return value;
				throw 'is dividable by 6';
			}),
			map(value => {
				if (value % 7) return value;
				throw 'is dividable by 7';
			})
		);
	}

	private recoveryLateBruteForce() : Observable<number>
	{
		// here we are able to recover from intermediate error
		return of(this.value).pipe(
			map(value => {
				if (value % 2) return value;
				throw 'is dividable by 2';
			}),
			map(value => {
				if (value % 3) return value;
				throw 'is dividable by 3';
			}),
			map(value => {
				if (value % 4) return value;
				throw 'is dividable by 4';
			}),
			map(value => {
				if (value % 5) return value;
				throw 'is dividable by 5';
			}),
			map(value => {
				if (value % 6) return value;
				throw 'is dividable by 6';
			}),
			catchError(error => {
				if (error === 'is dividable by 3') return of(this.value);
				throw error;
			}),
			map(value => {
				if (value % 7) return value;
				throw 'is dividable by 7';
			})
		);
	}
}
