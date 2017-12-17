import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino: string = undefined;

  constructor(private route: ActivatedRoute,
    public _ps: ItemsService ) {

      route.params.subscribe(parametros => {
        this.termino = parametros['termino'];
        _ps.busca_item(this.termino)
      });

    }

}
