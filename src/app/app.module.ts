import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    
  ],
  providers: [
    provideAnimations(), // required animations providers
    // provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
