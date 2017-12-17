import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// rutas
import { app_routing } from "./app.routes";

// servicios
import { InfoService } from "./services/info.service";
import { ItemsService } from "./services/items.service";

// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ItemComponent } from './component/item/item.component';
import { RouterModule } from '@angular/router/src/router_module';
import { SearchComponent } from './component/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InfoService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
