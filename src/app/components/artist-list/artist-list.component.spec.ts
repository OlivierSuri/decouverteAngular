import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';

describe('ArtistListComponent', () => {
  //méthode jasmine pour regrouper les tests lié a un component
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //config de l'env de test
      imports: [ArtistListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.artistes.length).toBe(4);
  });
  it('should contain', () => {
    component.artistes.forEach((artiste) => {
      expect(artiste.nom).toBeDefined();
      expect(artiste.photo).toBeDefined();
      expect(artiste.description).toBeDefined();
    });
  });
  it('should delete an artist', () => {
    // Initialement, il y a 4 artistes dans la liste
    expect(component.artistes.length).toBe(4);

    // Suppression de l'artiste à l'index 1 (Orelsan)
    component.deleteArtiste(1);

    // Après suppression, la liste devrait contenir 3 artistes
    expect(component.artistes.length).toBe(3);

    // Vérifie que l'artiste supprimé (Orelsan) n'est plus dans la liste
    expect(
      component.artistes.some((artiste) => artiste.nom === 'Orelsan')
    ).toBe(false);
  });
  it('should add an artist', () => {
    // Vérifie le nombre d'artistes avant l'ajout
    expect(component.artistes.length).toBe(4);

    // Création d'un nouvel artiste à ajouter
    const newArtiste = {
      nom: 'Lomepal',
      photo: 'https://example.com/photo-lomepal.jpg',
      description: 'Il est un rappeur français.',
    };

    // Appel de la méthode pour ajouter l'artiste
    component.ajouterArtiste(newArtiste);

    // Vérifie que la liste contient maintenant 5 artistes
    expect(component.artistes.length).toBe(5);

    // Vérifie que le nouvel artiste est bien ajouté dans la liste
    expect(component.artistes).toContain(jasmine.objectContaining(newArtiste));
  });
});
