import { RouterModule, Routes } from "@angular/router";

import {
  AboutComponent,
  HomeComponent,
  ItemComponent
} from "./component/index.pages";

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });