import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './view/members/members.component';
import { BooksComponent } from './view/books/books.component';

const libraryRoutes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(libraryRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }