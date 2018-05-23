import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, AlertErrorComponent]
})
export class SharedModule { }
