import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatecatService {


  constructor(private http: HttpClient) { }

  fetchFavoriteImages(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/favourites');
  }

  addCat(newCatData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/newCat/add', newCatData);
  }
}
