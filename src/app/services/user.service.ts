import { Injectable } from "@angular/core";
import { User } from "../entities/classes";


@Injectable()
export class UserService {
  user: User | null = null;
}