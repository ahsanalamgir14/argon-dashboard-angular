import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddRecipeComponent } from 'src/app/pages/add-recipe/add-recipe.component';
import { EditRecipeComponent } from 'src/app/pages/edit-recipe/edit-recipe.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'recipes', component: TablesComponent },
    { path: 'recipe/edit/:id', component: EditRecipeComponent },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
