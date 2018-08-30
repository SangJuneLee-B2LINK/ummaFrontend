import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../classes/brand';
import { Product } from '../../../classes/product';
import { BrandsService } from '../../../services/brands.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Brands: Brand [];
  Products: Product [];
  constructor(
    private brandsService: BrandsService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

}
