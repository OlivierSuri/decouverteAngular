import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-artist',
  imports: [CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  @Input() artist!: { nom: string; photo: string; description: string };
  @Output() delete: EventEmitter<void> = new EventEmitter();

  onDelete(){
    this.delete.emit(); // Emet l'evenement pour informer artiste-list
  }
}
