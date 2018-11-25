import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { EditorModule } from '../editor/editor.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    EditorModule,
    SharedModule,
    MatCardModule,
    ServiceModule
  ]
})
export class CreateModule { }
