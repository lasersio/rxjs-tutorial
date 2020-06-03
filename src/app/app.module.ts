import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchWikiComponent } from './search-wiki/search-wiki.component';

@NgModule({
	declarations : [
		AppComponent,
		SearchWikiComponent
	],
	imports      : [
		BrowserModule,
		FormsModule,
		NgbModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers    : [],
	bootstrap    : [AppComponent]
})
export class AppModule {
}
