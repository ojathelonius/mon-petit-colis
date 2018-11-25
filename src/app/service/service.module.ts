import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from 'src/app/service/service.component';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ServiceModule { } 
