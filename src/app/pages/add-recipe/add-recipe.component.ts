import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.recipeForm = this.fb.group({
      title: [''],
      description: [''],
      ingredients: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log('Recipe Submitted:', this.recipeForm.value);
      const recipeData = this.recipeForm.value;

      this.http.post('http://localhost:3000/recipes', recipeData).subscribe({
        next: response => {
          console.log('Recipe stored successfully:', response);
        },
        error: err => {
          console.error('Error storing recipe:', err);
        }
      });
    }
  }

}
