import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';
import { of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    return of(BOOKS.filter((book) => book.id === id)[0]);

  }
}
