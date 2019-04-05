import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {BannerComponent} from './core/banner/banner.component';
import {FooterComponent} from './core/footer/footer.component';
import {AboutComponent} from './about/about.component';
import { EventComponent } from './event/event.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './core/banner/navbar/navbar.component';

@NgModule({
  declarations: [
    ...AppRoutingModule.routableComponents,
    PageNotFoundComponent,
    BannerComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
