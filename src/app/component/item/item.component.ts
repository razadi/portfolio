import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../services/items.service";
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  item: any = undefined;
  cod: string = undefined;

  constructor(private route: ActivatedRoute,
              private _ps: ItemsService) {
    route.params.subscribe( parametros => {
      // console.log( parametros );
      // console.log(parametros['id']);
      _ps.carga_item(parametros['id'])
          .subscribe( res => {
              // console.log( res.json()); 
            this.cod = parametros['id'];
              this.item = res.json();
          })

    })
  }

}
