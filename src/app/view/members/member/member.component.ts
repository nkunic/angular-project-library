import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../books/book/book.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() book: Book;
}
