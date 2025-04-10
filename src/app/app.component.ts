import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent, ArtistListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'decouverteAgular';
}
