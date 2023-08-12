import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'http://localhost:3000/images'
  private catApiUrl = 'http://localhost:3000/favourite/add'

  constructor(private http: HttpClient) { }

  getTenRandomCats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCatDetails(catId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${catId}`)
  }

  // addFavouriteCats(catData: any): Observable<any> {
  //   return this.http.post<any>(this.catApiUrl, catData);
  // }

  addFavoriteCat(imageId: string, subId: string):Observable<any>  {
    const catData = {
      image_id: imageId,
      sub_id: subId
    };
    return this.http.post(this.catApiUrl, catData);
      
    
  }

  
}
