import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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


  putBook(book: Book): Observable<Book> {
        const httpOptions  = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    return this.http.put<Book>(baseURL+'books/'+book.id,book,httpOptions);
  }
}
