import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { APP_URL } from "src/app/services/base-url";
import { Personal } from "../types/personal";

@Injectable({
  providedIn: "root",
})
export class PersonalService {
  private personal: Personal[] = [];
  private loading: boolean = false;

  get getPersonal() {
    return [...this.personal];
  }

  set addPersonal(person: Personal) {
    this.personal.push(person);
  }

  get isLoading() {
    return this.loading;
  }
  constructor(private http: HttpClient) {}

  getAllPersonal() {
    this.loading = true;
    this.http
      .get<any>(`${APP_URL}api/personal/`)
      .pipe(
        catchError((error) => {
          this.loading = false;
          return error;
        })
      )
      .subscribe((Response: Personal[]) => {
        this.loading = false;
        this.personal = Response;
      });
  }
}
