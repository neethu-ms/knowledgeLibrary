import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

const BOOKS: Book[] = [
  {
   id: 1001,
   name: 'Anna Karineena',
   author: 'Leo Tolstoy',
   price: '$14',
   location: 'A1001',
   status: true,
   image:"https://images-na.ssl-images-amazon.com/images/I/5167gb%2BIMHL._SX315_BO1,204,203,200_.jpg",
   comments: [
    {
      rating: 3,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    },

    {
      rating: 5,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    }
   ]
  },
  {
   id: 1002,
   name: 'The Moonstone',
   author: 'Wilkie Collins',
   price: '$12',
   location: 'A1002',
   status: false,
   image:"https://m.media-amazon.com/images/I/41yctpV8VJL.jpg",
   comments: [
    {
      rating: 3,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    },

    {
      rating: 5,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    }
   ]
  },
  {
   id: 1003,
   name: 'Anna Karineena',
   author: 'Leo Tolstoy',
   price: '$14',
   location: 'A1003',
   status: true,
   image:"https://images-na.ssl-images-amazon.com/images/I/5167gb%2BIMHL._SX315_BO1,204,203,200_.jpg",
   comments: [
    {
      rating: 3,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    },

    {
      rating: 5,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    }
   ]
  },
  {
   id: 1004,
   name: 'The Moonstone',
   author: 'Wilkie Collins',
   price: '$12',
   location: 'A1004',
   status: true,
   image:"https://m.media-amazon.com/images/I/41yctpV8VJL.jpg",
   comments: [
    {
      rating: 3,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    },

    {
      rating: 5,
      comment: "Good book",
      author: "anonymous",
      date: Date.now().toString()
    }
   ]
  },
  {
    id: 1005,
    name: 'Anna Karineena',
    author: 'Leo Tolstoy',
    price: '$14',
    location: 'A1003',
    status: true,
    image:"https://images-na.ssl-images-amazon.com/images/I/5167gb%2BIMHL._SX315_BO1,204,203,200_.jpg",
    comments: [
      {
        rating: 3,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      },

      {
        rating: 5,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      }
     ]
   },
   {
    id: 1006,
    name: 'The Moonstone',
    author: 'Wilkie Collins',
    price: '$12',
    location: 'A1004',
    status: true,
    image:"https://m.media-amazon.com/images/I/41yctpV8VJL.jpg",
    comments: [
      {
        rating: 3,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      },

      {
        rating: 5,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      }
     ]
   },
   {
    id: 1007,
    name: 'The Moonstone',
    author: 'Wilkie Collins',
    price: '$12',
    location: 'A1004',
    status: true,
    image:"https://m.media-amazon.com/images/I/41yctpV8VJL.jpg",
    comments: [
      {
        rating: 3,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      },

      {
        rating: 5,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      }
     ]
   },
   {
     id: 1008,
     name: 'Anna Karineena',
     author: 'Leo Tolstoy',
     price: '$14',
     location: 'A1003',
     status: true,
     image:"https://images-na.ssl-images-amazon.com/images/I/5167gb%2BIMHL._SX315_BO1,204,203,200_.jpg",
     comments: [
      {
        rating: 3,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      },

      {
        rating: 5,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      }
     ]
    },
    {
     id: 1009,
     name: 'The Moonstone',
     author: 'Wilkie Collins',
     price: '$12',
     location: 'A1004',
     status: true,
     image:"https://m.media-amazon.com/images/I/41yctpV8VJL.jpg",
     comments: [
      {
        rating: 5,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      },

      {
        rating: 4,
        comment: "Good book",
        author: "anonymous",
        date: Date.now().toString()
      }
     ]
    }
 ];

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})


export class LibraryComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;

  onSelect(book: Book){
     this.selectedBook = book;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
