import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = 
[
  { path: '', component: AdminComponent , children :[
    { path: 'products', component: ProductsComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'inventory', component: InventoryComponent },

  ]  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
