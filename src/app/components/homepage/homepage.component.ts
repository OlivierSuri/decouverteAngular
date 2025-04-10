import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // pour que ngIf fonctionne

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  showParagraphe: boolean = false;  // Par défaut, le paragraphe est masqué.

  // Méthode pour changer l'état de "showParagraphe"
  toggleParagraphe() {
    this.showParagraphe = !this.showParagraphe; // Bascule l'état
  }
}
