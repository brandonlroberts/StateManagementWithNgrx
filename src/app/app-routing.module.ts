import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


const routes: Routes = [
  {path: 'app-customers-view', component: CustomersViewComponent},
  {path: 'app-customer-add', component: CustomerAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
