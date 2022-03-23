import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Member } from './member/member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  public members: Array<Member>;

  constructor(private libraryService: LibraryService) {}
  ngOnInit() {
    this.members = this.libraryService.members;
  }
}
