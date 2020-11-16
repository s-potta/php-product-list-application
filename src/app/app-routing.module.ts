import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdcutDetailsComponent } from './pages/products/prodcut-details/prodcut-details.component';
import { ProdcutsListComponent } from './pages/products/prodcuts-list/prodcuts-list.component';

const routes: Routes = [
  {path: '',  component: ProdcutsListComponent},
  { path: 'products', component: ProdcutsListComponent },
  { path: 'products/:id', component: ProdcutDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
