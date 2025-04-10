// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ArtistComponent } from './artist.component';

// describe('ArtistComponent', () => {
//   let component: ArtistComponent;
//   let fixture: ComponentFixture<ArtistComponent>;
//   let h3: HTMLElement;
//   let p: HTMLElement;
//   let img: HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ArtistComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ArtistComponent);
//     component = fixture.componentInstance;
//     img = fixture.nativeElement.querySelector('img');
//     h3 = fixture.nativeElement.querySelector('h3');
//     p = fixture.nativeElement.querySelector('p');
//     fixture.detectChanges();
//   });

//   it('should display', () => {
//     component.artist = {
//       nom: 'Orelsan',
//       photo: 'https://img.nrj.fr/MdrZWvi2DWIbmUSPyij4Rk1a2uc=/medias%2F2022%2F10%2F633fc3854b8b4_633fc387e3ba5.jpg',
//       description: 'il a pas chanter pour les JO'
//     },
//     fixture.detectChanges();
//     expect(h3.textContent).toContain('Orelsan');
//     expect(img.textContent).toContain('https://img.nrj.fr/MdrZWvi2DWIbmUSPyij4Rk1a2uc=/medias%2F2022%2F10%2F633fc3854b8b4_633fc387e3ba5.jpg');
//     expect(p.textContent).toContain('il a pas chanter pour les JO');
//   });
// });
