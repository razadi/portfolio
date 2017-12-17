import { Component } from '@angular/core';

import { InfoService } from "./services/info.service";
import { ItemsService } from "./services/items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // elaboro el constructor para crear el servicio que siempre estará ejecutandose
  constructor( public _is: InfoService,
               public _ps: ItemsService){

  }
}
