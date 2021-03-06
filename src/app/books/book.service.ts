import { Injectable } from '@angular/core';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: IBook[] = [];

  constructor () {}

  getBooks () {
    return this.bookList;
  }

  getBookByPosition (indexPos: number) {
    return this.bookList[indexPos-1];
  }

  getBookByName (title: string) {
    const searchTerm = title.toLowerCase();
    return this.bookList.filter(book => book.name.toLowerCase().includes(searchTerm));
  }

  addNewBook (newBook: IBook) { 
    return (this.bookList = [...this.bookList, newBook]);
  }

  removeBook = (indexPos: number) =>
    (this.bookList = [
      ...this.bookList.slice(0, indexPos),
      ...this.bookList.slice(indexPos + 1, this.bookList.length)
    ]);
}
