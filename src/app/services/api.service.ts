import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { User } from "../models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getAllPost(): Observable<User[]> {
   return this.httpService.get('/users').pipe(map(data => data as User[]))
  }
}
