import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthPageRoutingModule } from './auth-routing.module';
import { SharedModule } from '@doc-avail/modules';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    
    AuthPageRoutingModule
  ]
})
export class AuthModule { }
