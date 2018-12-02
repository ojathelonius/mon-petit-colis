import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { SharedModule } from '../shared/shared.module';
import { ThreeHelpersModule } from '../three-helpers/three-helpers.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MccColorPickerModule } from 'material-community-components';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThreeHelpersModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MccColorPickerModule
  ]
})
export class EditorModule { } 
