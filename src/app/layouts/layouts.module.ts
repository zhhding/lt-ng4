import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {LayoutsRoutingModule} from './layouts-routing.module';
import {MainComponent} from './main/main.component';
import {ButtonComponent} from '../component/button/button.component';
import {ComponentModule} from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ComponentModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    LayoutsRoutingModule
  ],
  declarations: [MainComponent]
})
export class LayoutsModule {
}
