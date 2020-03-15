import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Snippet} from '../components/components.module';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getSnippets(id: string): Observable<Snippet[]> {
    return this.http
      .get<Snippet[]>(`${environment.apiLink}/${id}.json`, {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application.'
        }),
      });
  }
}
