import {Component, Input, OnInit} from '@angular/core';
import {Snippet} from '../components.module';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})

export class SnippetsComponent implements OnInit {

  @Input() snippets: Snippet[];

  constructor() {
  }

  ngOnInit() {
  }

  //group snippets by the same speaker in sequence
  groupSnippets(list: Snippet[]) {
    const groups: Snippet[][] = [];

    if (list) {
      list.forEach((value: Snippet, index: number, array: Snippet[]) => {
        if (index === 0) {
          groups.push([value]);
        } else {
          if (array[index - 1].speaker === value.speaker) {
            const lastIndex: number = groups.length - 1;
            groups[lastIndex].push(value);
          } else {
            groups.push([value]);
          }
        }
      });
    }

    return groups;
  }

}
