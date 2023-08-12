import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCatComponent } from '../add-cat/add-cat.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openCreateCatModal(favoriteImages: any[]): MatDialogRef<AddCatComponent> {
    return this.dialog.open(AddCatComponent, {
      width: '400px',
      disableClose: true,
      data: { favoriteImages }
    });
  }

}
