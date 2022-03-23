import { Component, Input } from '@angular/core';
import { LibraryService } from '../../../services/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() id: number = 0;
  @Input() author: string;
  @Input() title: string;

  public edit = false;

  constructor(private libraryService: LibraryService) {}

  public openEdit() {
    this.edit = !this.edit;
  }

  public saveData() {
    this.libraryService.books[this.id].title = this.title;
    this.edit = !this.edit;
  }
}
