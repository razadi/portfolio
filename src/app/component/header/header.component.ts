// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';
import { InfoService } from "../../services/info.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  constructor( public _is: InfoService,
               private router: Router ){
    
  }

  buscar_item( termino: string){
    // console.log(termino);
    this.router.navigate(['search', termino]);
    
  }

}