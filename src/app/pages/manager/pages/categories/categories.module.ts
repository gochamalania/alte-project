import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryAddEditComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
