import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.scss']
})
export class EditCatComponent implements OnInit {
  editedCat: any = {};

  constructor(
    public dialogRef: MatDialogRef<EditCatComponent>,
    @Inject(MAT_DIALOG_DATA) public catData: any,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.editedCat = { ...this.catData };
  }

  onSubmit(): void {
    this.http.put(`http://localhost:3000/cats/${this.editedCat._id}`, this.editedCat)
      .subscribe(
        () => {
          this.dialogRef.close('edited');
        }
      );
  }
}