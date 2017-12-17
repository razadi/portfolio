import { Component } from '@angular/core';
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public _ps: ItemsService) {

  }
}
