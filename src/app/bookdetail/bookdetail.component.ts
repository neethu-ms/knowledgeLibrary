import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../services/book.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  book: Book;
  constructor( private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.book = this.bookService.getBook(id);
    }

  goBack(): void{
    this.location.back();
  }

  reserve(): void{
    this.book.status = false;
  }
  createForm(){
      this.feedbackForm = this.fb.group({
           name: '',
           message: ''
      });
  }

  onSubmit(){
     this.feedback = this.feedbackForm.value;
     console.log("feedback:", this.feedback);
     this.feedbackForm.reset();
  }

}
