import { Injectable } from '@angular/core';
import { Member } from '../view/members/member/member.model';
import { Book } from '../view/books/book/book.model';

@Injectable()
export class LibraryService {
  public books: Array<Book> = [
    {
      id: 0,
      autor: 'Haled Hosseini',
      naslov: 'A Thousand Splendid Suns',
    },
    {
      id: 1,
      autor: 'Jodi Picoult',
      naslov: "My Sister's Keeper",
    },
    {
      id: 2,
      autor: 'J.K. Rowling',
      naslov: 'Harry Potter and the Order of the Phoenix',
    },
  ];

  public members: Array<Member> = [
    {
      id: 0,
      ime: 'Christina Crawford',
      book: this.books[0],
    },
    {
      id: 1,
      ime: 'Frances Lane',
      book: this.books[1],
    },
    {
      id: 2,
      ime: 'Bradley Morrison',
      book: this.books[2],
    },
  ];

  constructor() {}
}
