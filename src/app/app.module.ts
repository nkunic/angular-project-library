import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BooksComponent } from './view/books/books.component';
import { BookComponent } from './view/books/book/book.component';
import { MembersComponent } from './view/members/members.component';
import { MemberComponent } from './view/members/member/member.component';

import { SharedModule } from './shared/shared.module';
import { LibraryService } from './services/library.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    MembersComponent,
    MemberComponent,
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
