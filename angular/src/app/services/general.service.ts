import { Injectable } from '@angular/core';
//servicio general que ayuda a mantener la sesion en toda la aplicacion
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private session: any= {
    logged:false,
  };
  get isLogged(){
    return this.session;
  }


  set setIsLogged(isLogged: boolean){
    this.session.logged = isLogged;
  }
  constructor() { }
}
