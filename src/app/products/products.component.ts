import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './../_model/product';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Array<IProduct>;
  filteredProducts: Array<IProduct>;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllProducts() {
    this.subscription = this.productService.getAll()
    .subscribe(data => this.filteredProducts = this.products = data);
    // this.productService.getAll().subscribe(data => this.products = data);
  }

  filter(query: string) {
    this.filteredProducts = (query)
    ? this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : this.products;
  }

  delete(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(productId).subscribe(data => this.getAllProducts());
    }
    this.router.navigate(['/products']);
  }

  update(productId) {
    this.router.navigate(['/products/' + productId]);
  }

}
