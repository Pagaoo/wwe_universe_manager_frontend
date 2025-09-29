import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wrestler } from '../models/wrestler';
import { environment } from '../../environments/environment';
import { buildJsonPatch } from '../utils/buildJsonPatch';



@Injectable({
  providedIn: 'root'
})
export class WrestlerService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/wrestlers`

  listWrestlers(): Observable<Wrestler[]> {
    return this.http.get<Wrestler[]>(this.apiUrl)
  }

  saveEditWrestler(id: number, original: Wrestler, updated: Wrestler): Observable<any> {
    const patchBody = buildJsonPatch(original, updated)
    return this.http.patch(`${this.apiUrl}/${id}`, patchBody)
  }
}
