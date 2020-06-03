import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchWikiComponent } from './search-wiki/search-wiki.component';
import { ErrorExampleComponent } from './error-example/error-example.component';


const routes : Routes = [
	{path : 'search-wiki', component : SearchWikiComponent},
	{path : 'error-example', component : ErrorExampleComponent}
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule {
}
