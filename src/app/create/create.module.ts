import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { SharedModule } from '../shared/shared.module';
import { ThreeHelpersModule } from '../three-helpers/three-helpers.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    ThreeHelpersModule
  ]
})
export class CreateModule { } 
