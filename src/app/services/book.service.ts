import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOKS } from '../shared/books';
import { of, Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return  this.http.get<Book[]>(baseURL+ 'books');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(baseURL+'books/'+id);

  }
}
