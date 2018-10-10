import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatTooltipModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { StepperComponent } from './stepper/stepper.component';
import { ModalsComponent } from './modals/modals.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'datatable',    component: DatatableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ExpansionPanelComponent,
    StepperComponent,
    ModalsComponent,
    DatepickerComponent,
    MultiselectComponent,
    CheckboxRadioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatStepperModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
