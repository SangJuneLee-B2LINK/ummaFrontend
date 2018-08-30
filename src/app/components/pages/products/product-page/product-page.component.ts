import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../classes/product';
import { ProductsService } from '../../../../services/products.service';
import { Title } from '@angular/platform-browser';
import { UiHandlerService } from '../../../../services/ui-handler.service'


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
efDom;
 
  Products: Product [];
  product: Product;
  selectedProduct: Product;
  error: any;
  onSelect(Product: Product): void {
    this.selectedProduct = Product;
  }

  constructor(private productsService: ProductsService, private titleService: Title, public uiHandlerService: UiHandlerService ) {
    this.titleService.setTitle("Products")
   }
   getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe(
        Products => (this.Products = Products),
        error => (this.error = error)
      )
  }

  ngOnInit(): void {
    this.getProducts();


    
  }
 


}
