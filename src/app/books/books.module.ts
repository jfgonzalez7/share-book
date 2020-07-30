import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListBookComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [ListBookComponent, CreateBookComponent]
})
export class BooksModule { }
