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
	public immediateValue = '';
	public searchTerm = '';

	public example = `
text$.pipe(
   debounceTime(300),
   distinctUntilChanged(),
   tap(() => this.searching = true),
   switchMap(term =>
      this.wiki.search(term).pipe(
         tap(() => this.searchFailed = false),
         catchError(() => {
            this.searchFailed = true;
            return of([]);
         }))
   ),
   tap(() => this.searching = false)
);
`;

	constructor(private wiki : WikipediaService)
	{
	}

	search = (text$ : Observable<string>) =>
		text$.pipe(
			tap(value => this.immediateValue = value),
			debounceTime(300),
			distinctUntilChanged(),
			tap(value => this.searchTerm = value),
			tap(() => this.searching = true),
			switchMap(term =>
				this.wiki.search(term).pipe(
					tap(() => this.searchFailed = false),
					catchError(() => {
						this.searchFailed = true;
						return of([]);
					}))
			),
			tap(() => this.searching = false)
		);
}
