import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditCatComponent } from '../edit-cat/edit-cat.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  cats: any[] = [];
  favoriteImages: any[] = [];
  constructor(public snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog, private modalService: ModalService) { }

  ngOnInit(): void {
    this.fetchCats();
  }

  openCreateCatModal(): void {
    this.modalService.openCreateCatModal(this.favoriteImages);
  }

  fetchCats(): void {
    this.http.get<any[]>('http://localhost:3000/cats').subscribe(
      (cats) => { this.cats = cats }
    )
  }

  editCat(cat: any): void {
    const dialogRef = this.dialog.open(EditCatComponent, {
      data: cat,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'edited') {
        this.fetchCats();
      }
    })
  }

  deleteCat(catId: string): void {

    const config: MatSnackBarConfig = {
      duration: 5000,
      verticalPosition: 'top', // You can adjust this based on your preference
      panelClass: ['custom-snackbar'] // Apply the custom class here
    };

    const snackBarRef = this.snackBar.open(
      'Are you sure you want to delete this cat?', 'Delete', config);
  
    snackBarRef.onAction().subscribe(() => {
      this.http.delete(`http://localhost:3000/cats/${catId}`).subscribe(
        () => {
          this.fetchCats();
          this.snackBar.open('Cat deleted successfully', '', { duration: 2000 });
        }
      );
    });
  }





}
