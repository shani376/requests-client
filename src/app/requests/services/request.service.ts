import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:5269/api/Requests'; // כתובת ה-API

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, request);
  }
}
