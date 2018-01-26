import { IProduct } from './../_model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product = {} as IProduct;
  productId;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.findById(this.productId).take(1)
      .subscribe(data => this.product = data);
    }
  }

  save(product) {
    if (this.productId) {
      this.productService.update(this.productId, product).subscribe();
    } else {
      this.productService.create(product).subscribe();
    }
    this.router.navigate(['/products']);
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
