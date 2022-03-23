import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Book } from './book/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  public books: Array<Book>;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.books = this.libraryService.books;
  }

}