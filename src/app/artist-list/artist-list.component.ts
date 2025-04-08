import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ArtistComponent } from '../artist/artist.component';

@Component({
  selector: 'app-artist-list',
  imports: [NgForOf, ArtistComponent],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  artistes = [
    {
      nom: 'Aya Nakamura',
      photo: 'https://img.nrj.fr/tt3rF3iy1sQnEGZBku35RW9uhqA=/medias%2F2024%2F09%2Fhwopzce9hv2zstksbvpcrs1shrtmcuvzbr4akeypdqi_66ed635c01c7f.jpg'
    },
    {
      nom: 'Orelsan',
      photo: 'https://img.nrj.fr/MdrZWvi2DWIbmUSPyij4Rk1a2uc=/medias%2F2022%2F10%2F633fc3854b8b4_633fc387e3ba5.jpg'
    },
    {
      nom: 'Angèle',
      photo: 'https://media.vogue.fr/photos/66b929a5b25ab1b1a1807618/2:3/w_1326,h_1989,c_limit/2165888854'
    }
  ];
}
