import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe {
  id?: string; // Optional for new recipes
  title: string;
  price: number;
  instructions: string;
  ingredients?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get <Recipe[]>(this.apiUrl);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
  deleteRecipe(id: string) {
  console.log('id :', id);
    return this.http.delete(`http://localhost:3000/recipes/${id}`);
  }
}
