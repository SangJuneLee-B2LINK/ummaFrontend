import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../classes/product';
import { ProductsService } from '../../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  
  @Input()Product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
    setTimeout(()=>{
      this.Product.pricingTable = JSON.parse(this.Product.pricingTable);
      this.Product.invalidCountry = JSON.parse(this.Product.invalidCountry);
      this.Product.certificate = JSON.parse(this.Product.certificate);
    console.log(typeof this.Product.pricingTable)

    }, 1000)
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
    .subscribe(Product => this.Product = Product);
  }
}
