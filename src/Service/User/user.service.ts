import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Utente_get} from "../../Model/Utente_get";
import {UtenteReg} from "../../Model/UtenteReg";
import {UtenteLog} from "../../Model/UtenteLog";
import {ModificaPassword} from "../../Model/ModificaPassword";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean;
  isRegistered: boolean;
  UtenteLog:UtenteLog=new UtenteLog();
  UtenteReg:UtenteReg=new UtenteReg();

  constructor(private http: HttpClient) { }

  getAll():Observable<Utente_get[]> {


  return this.http.get<Utente_get[]>('http://localhost:8080/api/utente/get/all');

  }

  getById(id:number):Observable<Utente_get> {


    return this.http.get<Utente_get>('http://localhost:8080/api/utente/get/'+id);

  }

  PostReg(utenteReg :UtenteReg):Observable<any>{
    return this.http.post('http://localhost:8080/api/utente/reg',utenteReg);

  }

  PostLog(utenteLog :UtenteLog):Observable<any>{
    return this.http.post('http://localhost:8080/api/utente/login',utenteLog);

  }

  PutPassword(modificaPassword: ModificaPassword):Observable<any>{
    return this.http.put('http://localhost:8080/api/utente/password',modificaPassword);
  }
}
