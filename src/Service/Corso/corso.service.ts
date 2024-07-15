import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, empty, Observable, retry} from "rxjs";
import {Utente_get} from "../../Model/Utente_get";
import {Corso_get} from "../../Model/Corso_get";
import {CreazioneCorso} from "../../Model/CreazioneCorso";
import {LocalStorageService} from "../Local-Storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private http: HttpClient, private LocalStorageService: LocalStorageService) { }

  getAll():Observable<Corso_get[]> {


    return this.http.get<Corso_get[]>('http://localhost:8080/api/corso/get/all',{
      headers:{
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    }).pipe(
      retry(3),
      catchError(err => {
        console.log('CIAO',err);
        return EMPTY;
      })
    );

  }
  corsi: Corso_get[] = [];

  CreaCorso(corsoCreazione:CreazioneCorso):Observable<any> {

    return this.http.post('http://localhost:8080/api/corso/crea',corsoCreazione,{
      headers:{
        "Authorization": "Bearer " + localStorage.getItem('token')
      }})
  }
}


