// Our API service will handle user input and get data
// from meal database which we can later filter
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealdbService {
  // https://www.themealdb.com/api.php
  
  recipeData: Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }

  // API GET request
  mealSearch(searchString:string): Observable<any> {
    
    // API services
    const api = `https://www.themealdb.com/api/json/v1/${environment.REAPP_MEALDB_API_KEY}`;

    // Service endpoints
    const endpoints = {
        search: {
          name: `${api}/search.php?s=${searchString}`,
          id: `${api}/search.php?i=${searchString}`
        },
        list: {
          categories: `${api}/search.php?categories`,
        },
        random: {
          categories: `${api}/search.php?random`,
        }
    };

    const url = endpoints.search.name;
    
    // Response from request
    const response = this.http.get<any>(url, { responseType: 'json' });
    // this.recipeData.next(response);
    return response;
  }
}

// export class EdamamService {
//   // https://developer.edamam.com/
  
//   constructor(private http:HttpClient) { }

//   // API GET request
//   mealSearch(searchString:string, searchCase:string): Observable<any> {
    
//     // API services
//     const api = `https://api.edamam.com`;

//     // Service endpoints
//     const endpoints = {
//       edamam: {
//         search: {
//           name: `${api}/search?q=${searchString}&app_id=${environment.REAPP_EDAMAM_RECIPE_API_ID}&app_key=${environment.REAPP_EDAMAM_RECIPE_API_KEY}`
//         }
//       }
//     };

//     const url = endpoints.edamam.search.name; 
    
//     // Response from request
//     return this.http.get<any>(url, { responseType: 'json' });
//   }
// }

