import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionGamesComponent } from './Sections/section-games/section-games.component';
import { SectionTemp2Component } from './Sections/section-temp2/section-temp2.component';
import { SectionTemp3Component } from './Sections/section-temp3/section-temp3.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionGamesComponent,
    SectionTemp2Component,
    SectionTemp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
