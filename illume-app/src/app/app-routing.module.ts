import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertifiacteComponent } from './certifiacte/certifiacte.component';

const routes: Routes = [
  {path:'certificate', component:CertifiacteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
