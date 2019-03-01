import { NgModule } from '@angular/core';
import * as Material from "@angular/material";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatGridListModule, 
    Material.MatFormFieldModule, 
    Material.MatInputModule, 
    Material.MatRadioModule, 
    Material.MatDatepickerModule, 
    Material.MatNativeDateModule, 
    Material.MatSelectModule, 
    Material.MatCheckboxModule, 
    Material.MatButtonModule, 
  ],
  exports:[
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
  ]
})
export class MaterialModule { }
