import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { CatsComponent } from './cats/cats.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDropdownComponent } from './image-dropdown/image-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    CatsComponent,
    HomeComponent,
    NavbarComponent,
    AddCatComponent,
    ImageDropdownComponent,
    EditCatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
