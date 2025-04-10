import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //pour faire les requete http
import { Observable } from 'rxjs'; //pour manip les donées en asynchrone
import { Artist } from '../components/artist-list/artist-list.component';


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  private apiUrl ='https://artists-api-ndhd.onrender.com'

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer f3e91f07a577250eb7bda4fccf37adf0'
    });
  }

  constructor(private http: HttpClient) { }

  //ajouter un artiste
  addArtist(artist: Artist): Observable<any> {
    console.log(artist);
    return this.http.post(`${this.apiUrl}/artists`, {name: artist.name, photo: artist.photo}, { headers: this.getHeaders() })
  }
  //supr un artist
  deleteArtist(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/artists/$id`, { headers: this.getHeaders() })
  }
  //recuperer les artistes
  getArtists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artists`, { headers: this.getHeaders() });
  }
  //reucuperer un artiste
  getArtistById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/artists/$id`, { headers: this.getHeaders() });
  }
}
