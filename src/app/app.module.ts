import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipes/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import {DataStoragreService} from './shared/data-storagre.service';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    FilterComponent,
    SearchComponent,
    CompanyComponent,
    AdminComponent,
    ModeratorComponent,
    LoginComponent,
    AboutComponent
  ],
    imports: [
        BrowserModule,
        FormsModule ,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,

    ],
  providers: [ShoppingListService , RecipeService , DataStoragreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

