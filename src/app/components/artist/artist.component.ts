import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-artist',
  imports: [CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  @Input() artist!: { id: string; name: string; photo: string };
  @Output() delete: EventEmitter<void> = new EventEmitter();

  onDelete(){
    this.delete.emit(); // Emet l'evenement pour informer artiste-list
  }
}
