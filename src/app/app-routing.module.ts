import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'cats', component: CatsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
