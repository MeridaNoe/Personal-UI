import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { APP_URL } from "src/app/services/base-url";
import { UserLogin } from "../types/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoading: boolean = false;

  get loading() {
    return this.isLoading;
  }

  public set setLoading(value: boolean) {
    this.isLoading = value;
  }

  constructor(private readonly http: HttpClient, private router: Router) {}

  signin(user: UserLogin) {
    this.setLoading = true;
    this.http
      .post<any>(`${APP_URL}api/auth`, user, {
        headers: { "Content-Type": "application/json" },
      })
      .pipe(
        catchError((error) =>{
          this.setLoading = false;
          return error;
        })
      )
      .subscribe((response) => {
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl('/');
        this.setLoading = false;
      });
  }
}
