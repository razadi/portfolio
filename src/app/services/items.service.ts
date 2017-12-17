import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable()
export class ItemsService {

  items: any[] = [];
  items_filters: any[] = [];
  cargando = true;

  constructor( private http: Http) {

      this.carga_items();
   }

// filtrar items
  public busca_item(termino: string){
    if( this.items.length === 0 ){
      this.carga_items()
        .then( () => {
          this.filtrar_items(termino);
        });
    }else{
      this.filtrar_items(termino);
    }
  }

  private filtrar_items(termino: string){
    // inicializo el array de items filtrados
    this.items_filters = [];
    // pongo le valor que entra en mayusculas
    termino = termino.toUpperCase();
    // barro el arreglo de los items para buscar
    this.items.forEach(prod => {
      // realizo la o las condiciones necesarias
      if (prod.categoria.toUpperCase().indexOf(termino) >= 0 ||
          prod.titulo.toUpperCase().indexOf(termino) >= 0) {
        this.items_filters.push(prod);
      }
      // console.log(prod);
    });
  }

// servicio para cargar solo el producto llamado
  public carga_item(cod: string) {
    return this.http.get(`https://portafolio-aef53.firebaseio.com/productos/${ cod }.json`);
  }

// servicio para cargar los items en home de la app
   public carga_items() {
    this.cargando = true;

    // despues de creado me doy cuenta que hay que hacerlo con una promesa ya que si no se carga no se puede hacer el buscar
    let promesa = new Promise((resolve, reject) => {

      this.http.get('https://portafolio-aef53.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          // console.log(res.json() );
          // setTimeout(() => {
          this.cargando = false;
          this.items = res.json();
          resolve();
          // }, 1000);

        });

    });

    return promesa;

    // if ( this.items.length === 0 ) {

    // }

   }

}
