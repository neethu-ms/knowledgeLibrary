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
  errMess: string;

  constructor(private bookService: BookService) { }

  ngOnInit(){
      this.bookService.getBooks().subscribe(books => this.books=books, errmess => this.errMess = <any>errmess);
  }


}
