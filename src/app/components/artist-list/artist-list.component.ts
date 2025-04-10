import { Component, importProvidersFrom, OnInit} from '@angular/core';
import { NgForOf } from '@angular/common';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistFormComponent } from "../artist-form/artist-form.component";
import { inject } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';

export interface Artist {
  id: string;
  name: string;
  photo: string;
}

@Component({
  selector: 'app-artist-list',
  imports: [NgForOf, ArtistComponent, ArtistFormComponent],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss',
  standalone: true
})
export class ArtistListComponent {

  artists: Artist[] = [];

  private webService = inject(WebserviceService);

  constructor() {
    this.loadArtists();
  }

  loadArtists() {
    this.webService.getArtists().subscribe({
      next: (data) => (this.artists = data),
      error: (err) => console.log('Erreur API', err)
    });
  }

  // artistes = [
  //   {
  //     nom: 'Aya Nakamura',
  //     photo: 'https://img.nrj.fr/tt3rF3iy1sQnEGZBku35RW9uhqA=/medias%2F2024%2F09%2Fhwopzce9hv2zstksbvpcrs1shrtmcuvzbr4akeypdqi_66ed635c01c7f.jpg',
  //     description: 'elle a chanter pour les JO'
  //   },
  //   {
  //     nom: 'Orelsan',
  //     photo: 'https://img.nrj.fr/MdrZWvi2DWIbmUSPyij4Rk1a2uc=/medias%2F2022%2F10%2F633fc3854b8b4_633fc387e3ba5.jpg',
  //     description: 'il a pas chanter pour les JO'
  //   },
  //   {
  //     nom: 'Angèle',
  //     photo: 'https://images.radio-canada.ca/q_auto,w_700/v1/ici-info/16x9/angele-musique-victoires-france.jpg',
  //     description: 'elle a pas chanter pour les JO'
  //   },
  //   {
  //     nom: 'DJ Titouan',
  //     photo: 'https://generations.fr/media/news/thumb/1110x624_jul-gazo-ninho-le-rap-francais-domine-l-annee-2023-de-deezer_65671300d814b.webp',
  //     description: 'il a un flow de fou'
  //   }
  // ];



  //méthode ajouter un artiste
  ajouterArtiste(newArtist: any){
    this.webService.addArtist(newArtist).subscribe({
      next: (createdArtist) => {
        this.artists.push(createdArtist); // mise à jour locale après ajout côté serveur
      },
      error: (err) => console.error('Erreur lors de l’ajout', err)
    });
  }

  //méthode de suppresion d'un artiste de la liste
  deleteArtiste(index: number){
      this.artists.splice(index, 1); //supprime 1 artiste a l'index
  }
}
