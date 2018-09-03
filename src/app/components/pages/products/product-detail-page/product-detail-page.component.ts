import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../classes/product';
import { ProductsService } from '../../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../../../classes/brand';
import { BrandsService } from '../../../../services/brands.service';
 

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  @Input()Product: Product;
  hasLiked = 0;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
    .subscribe(Product => this.Product = Product);
  }
  ngOnInit(): void {
    this.getProduct();
    setTimeout(()=>{
      this.Product.pricingTable = JSON.parse(this.Product.pricingTable);
      this.Product.invalidCountry = JSON.parse(this.Product.invalidCountry);
      this.Product.certificate = JSON.parse(this.Product.certificate);
      this.Product.images = JSON.parse(this.Product.images);
    }, 1000);
  }

  clickLike(event) {
    console.log(this.hasLiked);
    event.stopPropagation();
    if (!this.hasLiked) {
      this.hasLiked = 1;
      
  } else {
    this.hasLiked = 0;
     
  }

  }
 
}
