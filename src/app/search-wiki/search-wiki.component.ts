import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { WikipediaService } from '../services/wikipedia-service.service';

@Component({
	selector    : 'app-search-wiki',
	templateUrl : './search-wiki.component.html',
	providers   : [WikipediaService],
	styles      : [`.form-control {
		width: 300px;
	}`]
})
export class SearchWikiComponent {
	model : any;
	public searching = false;
	searchFailed = false;

	constructor(private _service : WikipediaService)
	{
	}

	search = (text$ : Observable<string>) =>
		text$.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			tap(() => this.searching = true),
			switchMap(term =>
				this._service.search(term).pipe(
					tap(() => this.searchFailed = false),
					catchError(() => {
						this.searchFailed = true;
						return of([]);
					}))
			),
			tap(() => this.searching = false)
		);
}
