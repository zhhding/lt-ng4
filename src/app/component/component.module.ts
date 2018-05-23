import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentRoutingModule} from './component-routing.module';
import {ButtonComponent} from './button/button.component';
import {MatButtonModule, MatButtonToggleModule, MatCardModule} from '@angular/material';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    ComponentRoutingModule
  ],
  declarations: [
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentModule {
}
