import { Component, OnInit } from "@angular/core";
import { RecipeService, Recipe } from "./recipe.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {

  recipes: Recipe[] = [];
  //   recipes = [
  //   {
  //     "title": "Spaghetti Bolognese",
  //     "price": 200,
  //     "instructions": "Cook spaghetti. Sauté onion and garlic in olive oil. Add beef and cook until brown. Add tomato sauce and simmer. Season with salt and pepper. Serve over spaghetti."
  //   },
  //   {
  //     "title": "Pancakes",
  //     "price": 800,
  //     "ingredients": [
  //       "1 cup flour",
  //       "1 tbsp sugar",
  //       "1 tsp baking powder",
  //       "1 egg",
  //       "1 cup milk",
  //       "2 tbsp melted butter",
  //       "Pinch of salt"
  //     ],
  //     "instructions": "Mix dry ingredients. Add wet ingredients and whisk until smooth. Cook on a hot griddle until bubbles form, then flip and cook until golden."
  //   },
  //   {
  //     "title": "Guacamole",
  //     "price": 1000,
  //     "ingredients": [
  //       "2 avocados",
  //       "1 lime",
  //       "1/2 onion",
  //       "1 tomato",
  //       "Salt",
  //       "Cilantro (optional)"
  //     ],
  //     "instructions": "Mash avocados. Add chopped onion, tomato, and lime juice. Season with salt. Mix and serve fresh."
  //   }
  // ]

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
          this.toastr.success("success", "deleted successfully");

    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
      console.log("res", this.recipes);
    });
  }
  onDelete(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
      this.recipes = this.recipes.filter((r) => r.id !== recipe.id);
      this.toastr.success("success", "deleted successfully");
    });
  }

  onEdit(recipe: Recipe) {
    this.router.navigate(["/recipe/edit", recipe.id]);
    this.toastr.error("success", "Something went wrong.");
  }
}
