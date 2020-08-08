import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { IBook } from "../book";
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html'
})
export class CreateBookComponent implements OnInit {
  icon = faTimes;
  bookName: string;
  author: string;
  imageUrl: string;
  
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() { }
   
  onSubmit() {
    const idx = this.bookService.getBooks().length + 1;
    const newBook: IBook= {
      id: idx.toString(),
      name: this.bookName,
      author: this.author,
      imageUrl: this.imageUrl
    };
    this.bookService.addNewBook(newBook);
    this.router.navigate(['']);
  }

}
