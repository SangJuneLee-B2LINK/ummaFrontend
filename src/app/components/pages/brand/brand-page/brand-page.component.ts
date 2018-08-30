import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../classes/brand';
import { BrandsService } from '../../../../services/brands.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  Brands: Brand [];
  selectedBrand: Brand;
  error: any;
  onSelect(Brand: Brand): void {
    this.selectedBrand = Brand;
  }
  constructor(private brandsService: BrandsService, private titleService: Title) { 
    this.titleService.setTitle("Brands");
  }

  ngOnInit() {
    this.getBrands();
  }
  getBrands(): void {
    this.brandsService
    .getBrands()
    .subscribe(
      Brands => (this.Brands = Brands),
      error => (this.error = error)
      )
  }
  searchValue;
  searchedBrands = [];
  isShowSearched = false;
  scrollTo(event) {
    let elem = document.querySelector(`#${event.target.innerHTML}`);
    if(elem) {
      elem.scrollIntoView();
    }
  }
  
  inputValue(event) {
    this.searchedBrands = [];
    if(event.target.value.trim() === '') {
      this.isShowSearched = false;
    }else {
      for(let criteria in this.getBrands) {
        for(let brand of this.getBrands[criteria]) {
          if(brand.name.indexOf(event.target.value) !== -1) {
            this.searchedBrands.push(brand);
          }
        }
      }
      this.isShowSearched = true;
    }
    
  }
}
