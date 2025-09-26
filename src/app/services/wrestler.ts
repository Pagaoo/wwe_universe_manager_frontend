import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wrestler } from '../models/wrestler';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WrestlerService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/wrestlers`

  listWrestlers(): Observable<Wrestler[]> {
    return this.http.get<Wrestler[]>(this.apiUrl)
  }
}
