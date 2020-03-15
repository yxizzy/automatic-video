import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnippetsComponent} from './snippets.component';
import {Snippet} from '../components.module';

describe('SnippetsComponent', () => {
  let component: SnippetsComponent;
  let fixture: ComponentFixture<SnippetsComponent>;
  const snippets: Snippet[] = [
    {
      speaker: 'Cust',
      snippet: 'Detrius nobilis zeta est.',
      time: 1,
    },
    {
      speaker: 'Cust',
      snippet: 'Detrius nobilis zeta est.',
      time: 2,
    },
    {
      speaker: 'Rep',
      snippet: 'Detrius nobilis zeta est.',
      time: 3,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnippetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snippets should be falsy', () => {
    expect(component.snippets).toBeFalsy();
  });

  it('should group snippets', () => {
    expect(component.groupSnippets(snippets).length).toBe(2);
    expect(component.groupSnippets(snippets)[0].length).toBe(2);
    expect(component.groupSnippets(snippets)[1].length).toBe(1);
  });
});
