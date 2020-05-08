import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[]{
    return BOOKS;
  }

  getBook(id): Book{
    console.log("id",id);
    console.log("BOOKS",BOOKS);
    let book = BOOKS.filter(book => book.id === id)[0];
    console.log('book=',book);
    return book;
  }
}
