import { Component, OnInit } from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { IBook } from "./../book";

import { BookService } from "../book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html'
})
export class ListBookComponent {
  bookList: IBook[] = [];
  bookResult: IBook[] = [];
  searchResult: string;
  icon = faPlus;

  constructor(private bookService: BookService) { 
    this.renderBooks();
  }
  
  renderBooks() {
    this.bookList = this.bookService.getBooks();
  }

  renderResult(result: Array<any>) {
    this.searchResult = '';
    result[0]['id'] ? this.bookList = result : this.searchResult = result[0];
  }

}
