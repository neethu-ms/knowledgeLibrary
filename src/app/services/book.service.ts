import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
       resolve(BOOKS);
    });
  }

  getBook(id: number): Promise<Book> {
    return new Promise((resolve) => {
     resolve(BOOKS.filter((book) => book.id === id)[0])
     });
  }
}
