import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWikiComponent } from './search-wiki.component';

describe('SearchWikiComponent', () => {
	let component : SearchWikiComponent;
	let fixture : ComponentFixture<SearchWikiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations : [SearchWikiComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchWikiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
