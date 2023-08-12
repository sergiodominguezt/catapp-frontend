import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CreatecatService } from '../services/createcat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {

  showCreateCatForm: boolean = false;

  cat: any = {};
  favoriteImages: any[] = [];
  selectedImage: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddCatComponent>,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private catService: CreatecatService) {
      this.favoriteImages = data.favoriteImages;
    }

  ngOnInit(): void {
    this.fetchFavoriteImages();
    if (this.favoriteImages.length > 0) {
      this.selectedImage = this.favoriteImages[0].url;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.dialogRef.close();
      }
    })
  }

  fetchFavoriteImages(): void {
    this.catService.fetchFavoriteImages().subscribe(
      (res) => this.favoriteImages = res.map((favorite) => favorite.image)
      
    )
  }

  onSubmit(): void {
    const newCatData = {
      name: this.cat.name,
      breed: this.cat.breed,
      age: this.cat.age,
      image: this.selectedImage
    };

    this.catService.addCat(newCatData).subscribe(
      
      (res: HttpResponse<any>) => {
        this.snackBar.open('Cat added successfully!', 'Close', {
          duration: 3000, 
          verticalPosition: 'top', 
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000)
        
      }
    )
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
