import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from './button/button.component';
import {CardComponent} from './card/card.component';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
