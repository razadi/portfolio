import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ItemsService {

  items: any[] = [];
  cargando: boolean = true;

  constructor( private http: Http) {

      this.carga_items();
   }

   public carga_items() {
    this.cargando = true;
    // if ( this.items.length === 0 ) {
      this.http.get('https://portafolio-aef53.firebaseio.com/productos_idx.json')
        .subscribe( res => {
          // console.log(res.json() );
          // setTimeout(() => {
            this.cargando = false;
            this.items = res.json();
          // }, 1000);
          
        });
    // }

   }

}
