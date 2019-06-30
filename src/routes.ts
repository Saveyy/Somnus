import { Routes } from '@angular/router';
import { SectionGamesComponent } from './app/Sections/section-games/section-games.component';
import { SectionTemp2Component } from './app/Sections/section-temp2/section-temp2.component';
import { SectionTemp3Component } from './app/Sections/section-temp3/section-temp3.component';

export const appRoutes: Routes = [
    { path: 'games', component: SectionGamesComponent },
    { path: 'temp2', component: SectionTemp2Component },
    { path: 'temp3', component: SectionTemp3Component },
    
    { path: '', redirectTo: '/games', pathMatch: 'full'},
];