import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() alignment: 'left' | 'center' | 'right' = 'left';
  @Input() color: 'light' | 'dark' | 'primary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
