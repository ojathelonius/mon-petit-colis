import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from 'src/app/service/service.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MccColorPickerModule } from 'material-community-components';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MccColorPickerModule
  ]
})
export class ServiceModule { } 
