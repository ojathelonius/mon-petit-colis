import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupRoutingModule } from './pickup-routing.module';
import { PickupComponent } from './pickup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PickupComponent],
  imports: [
    CommonModule,
    PickupRoutingModule,
    SharedModule
  ]
})
export class PickupModule { }
