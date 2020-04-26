import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [
   {
    id: 1001,
    name: 'Anna Karineena',
    author: 'Leo Tolstoy',
    price: '$14',
    location: 'A1001',
    status: true
   },
   {
    id: 1002,
    name: 'The Moonstone',
    author: 'Wilkie Collins',
    price: '$12',
    location: 'A1002',
    status: false
   },
   {
    id: 1003,
    name: 'Anna Karineena',
    author: 'Leo Tolstoy',
    price: '$14',
    location: 'A1003',
    status: true
   },
   {
    id: 1004,
    name: 'The Moonstone',
    author: 'Wilkie Collins',
    price: '$12',
    location: 'A1004',
    status: true
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
