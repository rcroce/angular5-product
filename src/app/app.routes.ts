import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/delete/:id', component: ProductsComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id', component: ProductFormComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' }
];
