import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Brand } from '../../../classes/brand';
import { BrandsService } from '../../../services/brands.service';
import { Country } from '../../../classes/country';
import { CountryService } from '../../../services/country.service';
import { StaticDataService } from '../../../services/static-data.service';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.scss']
})
export class FilterConditionComponent implements OnInit {
  @Input() isBrandHide;
  @Input() inputCategories;
  Brands: Brand [];
  Countries: Country [];
  @Output() onFilterChange = new EventEmitter();
  @Output() onTagsChange = new EventEmitter();
  @Output() onCategoryChange = new EventEmitter();

  @ViewChild('category') categoryRef: ElementRef;

  categories;

  constructor(private brandsService: BrandsService, private countryService: CountryService, public sds: StaticDataService) { 
  }

  ngOnInit() {
    this.categories = this.sds.categories;
    this.getBrands();
    this.getCountries();
 
  }

  ngAfterViewInit() {
    if(this.inputCategories) {
      console.log(this.inputCategories)
      let depth3s = this.categoryRef.nativeElement.querySelectorAll('.depth3_input');
      for(let category of this.inputCategories) {
        for(let depth3 of depth3s) {
          if(depth3.dataset.categoryName === category) {
            depth3.checked = true;

            let parentDepth2 = depth3.parentNode.parentNode.previousSibling.firstChild;
            parentDepth2.checked = true;
            for(let sibling of depth3.parentNode.parentNode.querySelectorAll('.depth3_input')) {
              if(depth3.checked !== true) {
                parentDepth2.checked = false;
                break;
              }
            }

            break;
          }
        }
      }
    }
  }
  filterKeyword(keyword) {
    if(keyword.value){
      this.onFilterChange.emit(`Keyword: ${keyword.value}`);
      keyword.value = '';
    }
  }
  filterCategory(target) {
    console.log(target)
    if(target.dataset.isParent === 'y') {
      let filters = [];
      let childInputs = target.parentNode.nextElementSibling.querySelectorAll('input');
      if(target.checked) {
        for(let input of childInputs) {
          filters.push(input.dataset.categoryName);
          input.checked = true;
        }
      } else {
        for(let input of childInputs) {
          filters.push(input.dataset.categoryName);
          input.checked = false;
        }
      } 

      this.onCategoryChange.emit({
        isParent: true,
        isChecked: target.checked,
        filters: filters
      });
    } else {
      let parentDepth2 = target.parentNode.parentNode.previousSibling.firstChild;
      if(!target.checked) {
        parentDepth2.checked = false;
      } else {
        parentDepth2.checked = true;
        for(let depth3 of target.parentNode.parentNode.querySelectorAll('.depth3_input')) {
          if(depth3.checked !== true) {
            parentDepth2.checked = false;
            break;
          }
        }
      }
      this.onCategoryChange.emit({
        isParent: false,
        isChecked: target.checked,
        category: target.dataset.categoryName
      });
    }
  }
  filterBrand(Brand) {
    this.onFilterChange.emit(`Brand: ${Brand}`);
  }
  filterMoq(moq) {
    if(moq.value) {
      this.onFilterChange.emit(`Moq: ${moq.value}`);
      moq.value = '';
    }
  }

  filterMsrp(from, to) {
    console.log(typeof from)
    console.log(typeof to)
    if(from.value && to.value) {
      this.onFilterChange.emit(`Msrp: $${from.value}~$${to.value}`);
    } else if(to.value) {
      this.onFilterChange.emit(`Msrp: $0~$${to.value}`);
    }

    from.value = '';
    to.value = '';
  }
  filterCountry(Country) {
    this.onFilterChange.emit(`Country: ${Country}`);

  }
  checkOff(condition) {
    let target;
    for(let input of this.categoryRef.nativeElement.querySelectorAll('.depth3_input')) {
      if(input.dataset.categoryName === condition) {
        target = input;
        break;
      }
    }
    target.checked = false;
    let targetParent = target.parentNode.parentNode.previousSibling.firstChild;
    if( targetParent.dataset && targetParent.dataset.isParent === 'y') {
      targetParent.checked = false;
    }
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
