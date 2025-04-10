import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artist-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './artist-form.component.html',
  styleUrl: './artist-form.component.scss'
})
export class ArtistFormComponent {
  @Output() addArtist = new EventEmitter<any>();

  artistForm: FormGroup;

  constructor(private formbuilder: FormBuilder){
    this.artistForm = this.formbuilder.group({
      name: ['', Validators.required],
      photo: ['',Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    const artisteData = this.artistForm.getRawValue();
    this.addArtist.emit(artisteData);  // Émet l'événement avec les données de l'artiste
  }
}

