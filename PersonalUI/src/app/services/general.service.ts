import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
 private  session: any = {
    logged: false,
  };

  get isLogged() {
    return this.session;
  }

  set setIsLogged(isLogged: boolean) {
    this.session.logged = isLogged;
  }
  constructor() {}
}
