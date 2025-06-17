import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html'
})
export class EditRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
        private toastr: ToastrService
    
  ) {}

ngOnInit(): void {
  this.recipeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', Validators.required]
  });

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.recipeId = id;
    this.http.get<any>(`http://localhost:3000/recipes/${id}`).subscribe(
      recipe => {
        console.log('Recipe:', recipe); // Check what's coming back
        this.recipeForm.patchValue({
          title: recipe.title,
          description: recipe.description,
          ingredients: recipe.ingredients
        });
      },
      error => {
        console.error('Failed to load recipe:', error);
      }
    );
  }
}

  onSubmit(): void {
    
    if (this.recipeForm.valid) {
      this.http.put(`http://localhost:3000/recipes/${this.recipeId}`, this.recipeForm.value)
        .subscribe(response => {
          console.log('Recipe updated successfully:', response);
          this.router.navigate(['/recipes']);
          this.toastr.success("success", "update successfully")
          // Navigate or show a success message if needed
        }, error => {
          console.error('Failed to update recipe:', error);
        });
    }
  }
}
