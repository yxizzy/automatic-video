import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnippetsComponent} from './snippets/snippets.component';
import {ErrorComponent} from './error/error.component';

@NgModule({
  declarations: [SnippetsComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [SnippetsComponent, ErrorComponent],
})

export class ComponentsModule {
}

export interface Snippet {
  snippet: string;
  speaker: string;
  time: number;
}
