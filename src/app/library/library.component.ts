import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})


export class LibraryComponent implements OnInit {

  books: Book[];
  selectedBook: Book;

  onSelect(book: Book){
     this.selectedBook = book;
  }
  constructor(private bookService: BookService) { }

  ngOnInit(){
      this.books = this.bookService.getBooks();
  }

}
