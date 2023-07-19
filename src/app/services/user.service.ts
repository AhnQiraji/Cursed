import { Injectable } from "@angular/core";
import { User } from "../entities/classes";
import { Observable, of } from "rxjs";


@Injectable()
export class UserService {
  public user: User | null = null;

  // public getUser(): Observable<User | null> {
  //   console.log('UserService: ', this.user);
  //   return of(this.user);
  // }
}