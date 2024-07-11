import { Injectable } from  '@angular/core' ;

@Injectable ({
  providedIn : 'root' ,
})
export  class  LocalStorageService {
  constructor ( ) {}

  // Imposta un valore nell'archiviazione locale
  setItem ( key : string , value : string ): void {
    localStorage . setItem (key, value);
  }

  // Ottieni un valore dall'archiviazione locale
  getItem ( key : string ): string | null {
    return  localStorage . getItem (key);
  }

  // Rimuovi un valore dall'archiviazione locale
  removeItem ( key : string ): void {
    localStorage . removeItem (key);
  }

  // Cancella tutti gli elementi dall'archiviazione locale
  clear (): void {
    localStorage . clear ();
  }
}
