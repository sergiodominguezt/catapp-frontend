import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-dropdown',
  templateUrl: './image-dropdown.component.html',
  styleUrls: ['./image-dropdown.component.scss']
})
export class ImageDropdownComponent {
  @Input() favoriteImages: any[] = [];
  @Input() selectedImage: string = '';
  @Output() selectedImageChange: EventEmitter<string> = new EventEmitter<string>();

}
