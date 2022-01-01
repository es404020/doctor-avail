import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
 imports:      [ 
    IonicModule,
    CommonModule,
    FormsModule,
    
    RouterModule
  ],
 declarations: [],
 exports:      [ IonicModule,
    CommonModule,
    FormsModule,RouterModule  ]
})
export class SharedModule { }