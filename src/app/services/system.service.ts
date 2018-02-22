import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError';
import 'rxjs/add/observable/of';

import { System } from '../models/System';

@Injectable()
export class SystemService {

  private systemsUrl = 'http://localhost:4200/assets/systems-short-list.json';
  
  constructor(private http: HttpClient) { }

  getSystems(): Observable<System[]> {
    let url = `${this.systemsUrl}`;
    return this.http.get<System[]>(url)
        .pipe(catchError(this.handleError('getSystems', [])));
  }

  protected handleError<T>(method?: string, result?: T){
    return (error: any): Observable<T> => {
        console.error(`${method} failed: ${error.message}`);
        return Observable.of(result as T);

    }
}


}
