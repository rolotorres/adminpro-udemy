import { NgModule } from "@angular/core";

//Modulos
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

//ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from "./pages.component";
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from "./pages.routes";

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  providers: []
})

export class PagesModule { }
