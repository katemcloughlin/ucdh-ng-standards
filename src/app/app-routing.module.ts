import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { DatatableComponent } from './datatable/datatable.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'datatable',    component: DatatableComponent },
  { path: 'menu',    component: MenuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }