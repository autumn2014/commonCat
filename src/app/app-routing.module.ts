import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path:'layout',component:LayoutComponent},
  {path:'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
