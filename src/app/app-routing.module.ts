import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {BookComponent} from './book/book.component';
import {EventComponent} from './event/event.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'book', component: BookComponent},
  {path: 'event', component: EventComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo: '../src/index.html', pathMatch: 'full'},
   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routableComponents = [
    AppComponent,
    AboutComponent,
    EventComponent,
    BookComponent,
    MenuComponent,
    PageNotFoundComponent
  ];
}
