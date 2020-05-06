import { Component, OnInit } from '@angular/core';
const BOOK = {
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
};

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book = BOOK;
  constructor() { }

  ngOnInit(): void {
  }

}
