import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) {}

  getBooks(): Observable<Book[]> {
    return  this.http.get<Book[]>(baseURL+ 'books')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(baseURL+'books/'+id)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }


  putBook(book: Book): Observable<Book> {
        const httpOptions  = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    return this.http.put<Book>(baseURL+'books/'+book.id,book,httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
