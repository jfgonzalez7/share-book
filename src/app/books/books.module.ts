import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ListBookComponent, CreateBookComponent, DetailBookComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [ListBookComponent, CreateBookComponent]
})
export class BooksModule { }
