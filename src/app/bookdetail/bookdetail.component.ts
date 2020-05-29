import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';
import { Comment } from '../shared/comment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss'],
})
export class BookdetailComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;
  feedbackForm: FormGroup;
  feedback: Feedback;
  book: Book;
  comment: Comment;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  goBack(): void {
    this.location.back();
  }


  reserve():void{
      this.book.status = false;
      this.bookService.putBook(this.book).subscribe((book) => {
        this.book = book;
      })

  }
  createForm() {
    this.feedbackForm = this.fb.group({
      author: ['', Validators.required],
      comment: ['', Validators.required],
      rating:1

    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.comment = this.feedbackForm.value;
    this.comment.date = new Date().toISOString();
    this.book.comments.push(this.comment);
     this.feedbackForm.reset({
      author: '',
      comment: '',
      rating:1
    });
    this.feedbackFormDirective.resetForm();
  }


}
