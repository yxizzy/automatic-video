import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Snippet} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  /**
   * This gets the transcripts fro the API
   * @param id this is the id of the corresponding transcript
   * @returns video transcript in a json format
   */
  getSnippets(id: string): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(`${environment.apiLink}/${id}.json`, {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json.'
        }),
      });
  }
}
