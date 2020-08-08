import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from "./books/create-book/create-book.component";
import { ListBookComponent } from "./books/list-book/list-book.component";
import { DetailBookComponent } from './books/detail-book/detail-book.component';

const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'detail/:id', component: DetailBookComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
