import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App_URL } from '../../../services/base-url';
import { Personal } from '../types/personal';
import { catchError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  loading:boolean = false;
  edit:boolean=false;
  private people: Personal[] = [];
  person: Personal={
    id:0,
    name:"",
    surname:"",
    lastname:"",
    birthday:"",
    salary:0.0,
    position:{},
    user:undefined
  }

  get personal(){
    return[...this.people]
  }

  constructor(private http:HttpClient) {}
  findAll(){
    this.loading = true;

    return this.http.get<Personal[]>(`${App_URL}api/personal/`);
  }

  findAllPosition(){
    this.loading=true;
    return this.http.get<any>(`${App_URL}api/position/`)
  }

  save(personal:Personal){
    //solo es el endpoint
    this.loading = true;
    return this.http.post<Personal>(`${App_URL}api/personal/`, personal);
    //este endpoint devuelve json
  }

  changeStatus(){
    this.loading=true;
    return this.http.delete<Personal>(`$`)
  }

  update(personal:Personal){
    //solo es el endpoint
    this.loading = true;
    return this.http.put<Personal>(`${App_URL}api/personal/`, personal);
    //este endpoint devuelve json
  }
  
}
