import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { ImageComponent }      from './image/image.component';
import { ListComponent }      from './list/list.component';

const routes: Routes = [
  { path: 'image', component: ImageComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
