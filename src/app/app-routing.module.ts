import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// external components
import { SidebarComponent } from './comman/sidebar/sidebar.component';

const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
