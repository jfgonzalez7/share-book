import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/books/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() bookResult = new EventEmitter<String>();
  searchTerm: string;

  constructor(private bookService: BookService) { }

  searchBook() { 
    const result = this.bookService.getBookByName(this.searchTerm);
    const message: any = result[0] ? result : ['Book not found'];
    this.bookResult.emit(message)
  }

}
