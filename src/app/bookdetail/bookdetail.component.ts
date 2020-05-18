import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss'],
})
export class BookdetailComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  book: Book;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.bookService.getBook(id).then((book) => (this.book = book));
  }

  goBack(): void {
    this.location.back();
  }

  reserve(): void {
    this.book.status = false;
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset({
      name: '',
      message: '',
    });
  }
}
