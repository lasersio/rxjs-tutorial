import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';

const Params = new HttpParams({
	fromObject : {
		action : 'opensearch',
		format : 'json',
		origin : '*'
	}
});

@Injectable({providedIn : 'root'})
export class WikipediaService {

	constructor(private http : HttpClient)
	{
	}

	search(term : string)
	{
		if (term === '') return of([]);

		return this.http.get(WIKI_URL, {params : Params.set('search', term)}).pipe(
			map(response => response[1])
		);
	}
}
