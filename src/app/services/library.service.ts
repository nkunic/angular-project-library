import { Injectable } from '@angular/core';
import { Member } from '../view/members/member/member.model';
import { Book } from '../view/books/book/book.model';

@Injectable()
export class LibraryService {
  public books: Array<Book> = [
    {
      id: 0,
      author: 'Haled Hosseini',
      title: 'A Thousand Splendid Suns',
    },
    {
      id: 1,
      author: 'Jodi Picoult',
      title: "My Sister's Keeper",
    },
    {
      id: 2,
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Order of the Phoenix',
    },
  ];

  public members: Array<Member> = [
    {
      id: 0,
      name: 'Christina Crawford',
      book: this.books[0],
    },
    {
      id: 1,
      name: 'Frances Lane',
      book: this.books[1],
    },
    {
      id: 2,
      name: 'Bradley Morrison',
      book: this.books[2],
    },
  ];

  constructor() {}
}
