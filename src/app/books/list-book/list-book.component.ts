import { Component, OnInit } from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { IBook } from "./../book";
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  bookList: IBook[] = [];
  icon = faPlus;

  constructor() { 
    const newBook: IBook = {
      id: '1',
      name: 'Cuentos',
      author: 'Tomás Carrasquilla',
      imageUrl: 'https://pictures.abebooks.com/SARGANTANA/22493391360.jpg'
    }
    this.addNewBook(newBook);
    this.addNewBook(newBook);
    this.addNewBook(newBook);
  }

  ngOnInit() { }

  addNewBook(book: IBook) {
    this.bookList = [...this.bookList, book];
  }
}
