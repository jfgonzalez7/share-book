import { Component, OnInit } from '@angular/core';

import { IBook } from "./../book";
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  bookList: IBook[] = [];

  constructor() { }

  ngOnInit() {
  }

}
