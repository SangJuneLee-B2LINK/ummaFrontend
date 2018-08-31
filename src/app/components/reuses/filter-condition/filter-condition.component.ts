import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../../../classes/brand';
import { BrandsService } from '../../../services/brands.service';
import { Category } from '../../../classes/category';
import { Country } from '../../../classes/country';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss']
})
export class FilterConditionComponent implements OnInit {
  @Input() isBrandHide;
  Brands: Brand [];
  Countries: Country [];

  constructor(private brandsService: BrandsService, private countryService: CountryService) { 
  }

  ngOnInit() {
    this.getBrands();
    this.getCountries();
 
  }
  getBrands(): void {
    this.brandsService.getBrands()
    .subscribe(Brands => this.Brands = Brands);
  }

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(Countries => this.Countries = Countries);
  }

}
