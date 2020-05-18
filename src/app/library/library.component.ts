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

  constructor(private bookService: BookService) { }

  ngOnInit(){
      this.bookService.getBooks().then(books => this.books=books);

  }


}
