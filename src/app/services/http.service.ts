import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../entities/classes';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ 

  }

  login(email: string, password: string) : Observable<User | string> {
    const options = { params: new HttpParams().set('email', email).set('password', password) };

    return this.http.get('http://localhost:3000/login', options).pipe(
      map((user:any) => {
        if (user.error) {
          return user.error;
        }
        // console.log(user)
        return new User(user.name, user.email, user.password, user.id, user.avatar);
      })
    )
  };


  registration(name: string, email: string, password: string) : Observable<string> {
    const body = {name: name, email: email, password: password}

    return this.http.post('http://localhost:3000/registration/', body).pipe(
      map((result:any) => {
        if (result.error) {
          return result.error;
        }
        return result;
      })
    );
  };


  changeProfile(email: string, password: string, newName: string, newPassword: string) : Observable<string> {
    const body = {email: email, password: password, newName: newName, newPassword: newPassword}

    return this.http.post('http://localhost:3000/changeProfile/', body).pipe(
      map((result:any) => {
        if (result.error) {
          return result.error;
        }
        return result;
      })
    );
  }


  newTask(name: string, description: string, importance: string, status: string) : Observable<string> {
    const body = {name: name, description: description, importance: importance, status: status}

    return this.http.post('http://localhost:3000/newTask/', body).pipe(
      map((result:any) => {
        if (result.error) {
          return result.error;
        }
        return result;
      })
    );
  }

  

  getTasks() : any {
    // let taskList: any[] | null = null;
    return this.http.get('http://localhost:3000/getTask/').pipe(
      map((result:any) => {
        if (result.error) {
          return result.error;
        }
        return result;
      })
    )
    // console.log('getTasks returns: ', taskList);
    // return taskList;
  }
}