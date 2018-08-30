import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../../../classes/brand';
import { BrandsService } from '../../../services/brands.service';
import { Category } from '../../../classes/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss']
})
export class FilterConditionComponent implements OnInit {
  @Input() isBrandHide;
  Brands: Brand [];
  Categories: Category [];

  constructor(private brandsService: BrandsService, private categoriesService: CategoriesService) { 
  }

  ngOnInit() {
    this.getBrands();
    this.getCategories();
  }
  getBrands(): void {
    this.brandsService.getBrands()
    .subscribe(Brands => this.Brands = Brands);
  }
  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(Categories => this.Categories = Categories);
  }

}
