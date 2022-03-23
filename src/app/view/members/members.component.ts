import { Component, OnInit } from '@angular/core';
import { BibliotekaService } from '../../services/biblioteka.service';
import { Clan } from './clan/clan.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  public members: Array<Member>;

  constructor(private bibliotekaService: BibliotekaService) {}
  ngOnInit() {
    this.members = this.bibliotekaService.members;
  }
}
