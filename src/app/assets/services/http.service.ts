import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../entities/classes';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ }

  getUser(email: string, password: string) : Observable<User | string> {
    const options = { params: new HttpParams().set('email', email).set('password', password) };

    return this.http.get('http://localhost:3000/getUser/', options).pipe(
      map((user:any) => {
        if (user.error) {
          return user.error;
        }
        return new User(user.email, user.name, user.password, user.id, user.avatar);
      })
    );
  };

  postUser(name: string, email: string, password: string) : Observable<string> {
    const body = {name: name, email: email, password: password}

    return this.http.post('http://localhost:3000/postUser/', body).pipe(
      map((user:any) => {
        // if (user.error) {
        //   return user.error;
        // }
        // return new User(user.email, user.name, user.password, user.id, user.avatar);
        return 'omw';
      })
    );
  };
}