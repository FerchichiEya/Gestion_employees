import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './Employe/Employe.component';
import { AddEmployeComponent } from './add-Employe/add-Employe.component';



const routes: Routes = [
  {path: "Employe", component : EmployeComponent},
  {path: "add-Employe", component : AddEmployeComponent}
  ,{ path: "", redirectTo: "Employe", pathMatch: "full" }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
