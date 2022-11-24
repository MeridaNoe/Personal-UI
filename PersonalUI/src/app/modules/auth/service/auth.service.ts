import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserLogin } from "../types/user";
import { APP_URL } from "../../../services/base-url";
import { Router, Routes } from "@angular/router";
import { catchError } from "rxjs";
import { GeneralService } from "src/app/services/general.service";

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

  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private loginState: GeneralService
  ) {}

  signin(user: UserLogin) {
    this.setLoading = true;
    this.http
      .post<any>(`${APP_URL}api/auth/`, user, {
        headers: { "Content-Type": "aplication/json" },
      })
      .pipe(
        catchError((error) => {
          this.setLoading = false;
          return error;
        })
      )
      .subscribe((Response) => {
        localStorage.setItem("token", Response.token);
        this.router.navigateByUrl("");
        this.loginState.setIsLogged=true;
        this.setLoading = false;
      });
  }
}
