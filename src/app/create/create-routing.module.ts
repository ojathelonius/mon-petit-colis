import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { EditorComponent } from '../editor/editor.component';

const routes: Routes = [{
  path: '',
  component: CreateComponent
},
{
  path: 'editor',
  component: EditorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
