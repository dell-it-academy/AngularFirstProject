import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  apiCategoryJoke = 'https://api.chucknorris.io/jokes/random?category=';
  apiCategory = 'https://api.chucknorris.io/jokes/categories';
  apiRandomJoke = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get(this.apiRandomJoke);
  }

  getCategoryJoke(category){
    return this.http.get(`${this.apiCategoryJoke}${category}`);
  }

  getCategories(){
    return this.http.get(this.apiCategory);
  }
}
