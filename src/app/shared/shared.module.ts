import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './templates/content/content.component';

import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';

const TEMPLATES_TO_EXPORT = [ContentComponent];

const COMPONENTS_TO_EXPORT = [
  ButtonComponent,
  TitleComponent,
];

@NgModule({
  imports: [CommonModule],
  exports: [...TEMPLATES_TO_EXPORT, ...COMPONENTS_TO_EXPORT],
  declarations: [...TEMPLATES_TO_EXPORT, ...COMPONENTS_TO_EXPORT],
})
export class SharedModule {}
