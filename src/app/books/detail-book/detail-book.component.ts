import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html'
})
export class DetailBookComponent {
  book: IBook;
  icon = faPlus;

  constructor(bookService: BookService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.book = bookService.getBookByPosition(params['id']);
      console.log(this.book);
      
    })
  }

}
