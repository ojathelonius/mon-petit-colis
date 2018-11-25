import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { EditorComponent } from '../editor/editor.component';
import { ServiceComponent } from 'src/app/service/service.component';

const routes: Routes = [{
  path: '',
  component: CreateComponent
},
{
  path: 'editor',
  component: EditorComponent
},
{
  path: 'service',
  component: ServiceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
