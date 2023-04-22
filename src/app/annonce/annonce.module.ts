import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AnnonceComponent } from './annonce.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AnnonceComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    AppRoutingModule
  ]
})
export class AnnonceModule { }
