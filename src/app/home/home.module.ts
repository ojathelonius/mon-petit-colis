import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  FooterComponent,
  HeaderComponent
} from '../shared';

@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
