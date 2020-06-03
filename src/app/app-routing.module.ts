import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchWikiComponent } from './search-wiki/search-wiki.component';


const routes : Routes = [
	{path : 'search-wiki', component : SearchWikiComponent},
	{path : 'second-component', component : SearchWikiComponent}
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule {
}
