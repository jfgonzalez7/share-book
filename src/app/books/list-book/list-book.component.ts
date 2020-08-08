import { Component, OnInit } from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { IBook } from "./../book";

import { BookService } from "../book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html'
})
export class ListBookComponent implements OnInit {
  bookList: IBook[] = [];
  icon = faPlus;

  constructor(bookService: BookService) { 
    this.bookList = bookService.getBooks();
    console.log(this.bookList);
    
  }

  ngOnInit() { }
}
