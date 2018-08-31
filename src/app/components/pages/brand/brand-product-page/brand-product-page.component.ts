import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../../../classes/brand';
import { BrandsService } from '../../../../services/brands.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand-product-page',
  templateUrl: './brand-product-page.component.html',
  styleUrls: ['./brand-product-page.component.css']
})
export class BrandProductPageComponent implements OnInit {
  detailUsed = true;
  isShowBrandStory = false;
  @Input()Brand: Brand;

  constructor(
    private route: ActivatedRoute,
    private brandsService: BrandsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBrand();
 
  }
  getBrand(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.brandsService.getBrand(id)
    .subscribe(Brand => this.Brand = Brand);
  }
 
}
