import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  cats: any[] = [];

  
  constructor(private imagesService: ImagesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.imagesService.getTenRandomCats().subscribe(
      data =>  this.cats = data
    );
    
  }
  addFavorite(cat: any): void {
      this.imagesService.addFavoriteCat(cat.id, "sadt-1091433333").subscribe(() => {
        this.showSuccessMessage();
      });
  }

  private showSuccessMessage(): void {
    this.snackBar.open('Added to favorites', 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  

}
