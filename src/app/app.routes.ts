import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

export const routes: Routes= [
    {path: 'home', component: HomepageComponent},
    {path: 'artists', component: ArtistListComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'} //redirection vers page d'acceuil par defaut   
];

