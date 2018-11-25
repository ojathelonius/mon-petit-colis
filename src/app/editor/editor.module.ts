import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { SharedModule } from '../shared/shared.module';
import { ThreeHelpersModule } from '../three-helpers/three-helpers.module';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThreeHelpersModule
  ]
})
export class EditorModule { } 
