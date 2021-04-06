import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  constructor(private http:HttpClient) { }

  // API GET request
  getRecipes(searchString:string): Observable<any> {
    
    // // let searchString = 'Arrabiata';

    // API keys
    const keys = {
      // https://www.themealdb.com/api.php
      mealdb: '1'
    }
    
    // API services
    const services = {
      mealdb:`https://www.themealdb.com/api/json/v1/${keys.mealdb}/`,
      
    }

    // Service endpoints
    const endpoints = {
      mealdb: {
        searchByName: `${services.mealdb}/search.php?s=${searchString}`
      }
    };
    
    const requestUrl = endpoints.mealdb.searchByName;
    
    // Response from request
    return this.http.get<any>(requestUrl, { responseType: 'json' });
  }
}

