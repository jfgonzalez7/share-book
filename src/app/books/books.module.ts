import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBookComponent } from './list-book/list-book.component';


@NgModule({
  declarations: [
    ListBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListBookComponent]
})
export class BooksModule { }
