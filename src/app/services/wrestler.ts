import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wrestler } from '../models/wrestler';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WrestlerService {
  private apiUrl = `${environment.urlApi}/wrestlers`

  constructor(private http: HttpClient) {}

  wrestlersList(): Observable<Wrestler[]> {
    return this.http.get<Wrestler[]>(this.apiUrl)
  }
}
