import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from '../services/http.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ComponentsModule} from '../components/components.module';
import {Snippet} from '../models';
import {environment} from '../../environments/environment';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;
  const snippets: Array<Snippet> = [
    {
      speaker: 'Cust',
      snippet: 'Detrius nobilis zeta est.',
      time: 3,
    },
    {
      speaker: 'Cust',
      snippet: 'Detrius nobilis zeta est.',
      time: 1,
    },
    {
      speaker: 'Rep',
      snippet: 'Detrius nobilis zeta est.',
      time: 2,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ComponentsModule,
      ],
      providers: [
        HttpService,
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort snippets by time in ascending order', () => {
    expect(component.sortSnippets(snippets)[0].time).toBe(1);
    expect(component.sortSnippets(snippets)[2].time).toBe(3);
  });

  it('should display "Video does not exist"', () => {
    component.getSnippets.call(component, {id: 'invalid-id'})
      .subscribe(value => {
        expect(value).toBe(false);
      });

    const req = httpMock.expectOne(`${environment.apiLink}/invalid-id.json`);
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
  });

  it('should display "Please Provide A Valid Video ID"', () => {
    component.getSnippets.call(component, {})
      .subscribe(value => {
        expect(value).toBe('Please Provide A Valid Video ID');
      });
  });

  it('should set error to status to "Oops!!!"', () => {
    component.setError.call(component, 'Oops!!!', 'Oops!!!');
    expect(component.error).toBe('Oops!!!');
  });
});
