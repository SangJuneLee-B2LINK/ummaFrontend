import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../../../../classes/product';
import { ProductsService } from '../../../../services/products.service';
import { Title } from '@angular/platform-browser';
import { UiHandlerService } from '../../../../services/ui-handler.service';
import { FilterConditionComponent } from '../../../reuses/filter-condition/filter-condition.component';
import { RouterStateService } from '../../../../services/router-state.service';
import { UserDataService } from '../../../../services/user-data.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  selectedFilterTags: any;
  selectedFilter = {
    keyword: [],
    category: [],
    Brand: [],
    moq: [],
    msrp: [], 
    Country: []
  };
  scrollY;
  pageIndex = 5;
  sortBy = 'popular';


  Products: Product [];
  productCount: Array<Product>;
  product: Product;
  selectedProduct: Product;
  error: any;
  onSelect(Product: Product): void {
    this.selectedProduct = Product;
  }
  efDom;
  isShowTc = false;
  @ViewChild(FilterConditionComponent) filterComponent: FilterConditionComponent;

  constructor(
    public elementRef: ElementRef,
    private productsService: ProductsService, 
    private titleService: Title, 
    public uiHandlerService: UiHandlerService,
    public routerStateService: RouterStateService,
    public userDataService: UserDataService,
    public location: Location 
  ) 
    {
    this.titleService.setTitle("List of Products")
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
    this.efDom = this.elementRef.nativeElement;
    this.routerStateService.productListComp = this;

    //이전 페이지가 detail 페이지인 경우 userDataService에 캐시된 정보를 가져와 보여준다
    if(this.routerStateService.previousUrl && this.routerStateService.previousUrl.indexOf('/product/detail') !== -1) {
      console.log(1);
      this.selectedFilter = this.userDataService.selectedFilter;
      this.selectedFilterTags = this.userDataService.selectedFilterTags;
      this.Products = this.userDataService.products;
      this.pageIndex = this.userDataService.pageIndex;
      setTimeout(() => {
        window.scrollTo(0, this.userDataService.scrollY);
      }, 0);
    } else {
      //이전 페이지가 detail 페이지가 아니고 사용자가 저장한 filter 값이 있는 경우 그 값을 가져와 api 호출해서 목록을 가져온다
      if(this.userDataService.savedSelectedFilter) {
        let deepClone:any = {};
        for(let prop in this.userDataService.savedSelectedFilter) {
          deepClone[prop] = this.userDataService.savedSelectedFilter[prop].slice(0);
        }
        this.selectedFilter = deepClone;
        console.log(deepClone);
        this.pageIndex = 1;
        this.selectedFilterTags = new Set();
        for(let prop in this.selectedFilter) {
          if(prop !== 'msrp') {
            for(let filterValue of this.selectedFilter[prop]) {
              this.selectedFilterTags.add(`${prop}: ${filterValue}`);
            }
          } else {
            if(this.selectedFilter.msrp.length === 2) {
              this.selectedFilterTags.add(`msrp: ${this.selectedFilter.msrp[0]}~${this.selectedFilter.msrp[1]}`);
            }
          }
        }
        //통신 후 products 할당
      } else {

        //아무것도 아닌 경우 그냥 인기순 api를 호출하여 목록을 가져온다
        this.pageIndex = 1;
        //통신 후 products 할당
      }
    }

    // let paramKeyword = this.route.snapshot.paramMap.get('keyword');
    // if(paramKeyword) {
    //   this.onFilterChange(`Keyword: ${paramKeyword}`);
    // }

  }
  ngOnDestroy() {
    this.routerStateService.productListComp = null;
  }
  
  //select dropbox 열고 닫기
	toggleSelectbox(event) {
    this.uiHandlerService.toggleSelectbox(event, this.efDom);
    this.isShowTc = !this.isShowTc;
    console.log(1);
	}

	//select dropbox의 option 선택 리스너
	choiceSelectbox(event) {
    this.uiHandlerService.choiceSelectbox(event, this);
    console.log(2);

  }
  
  clickTc() {
    this.uiHandlerService.openedSelectbox.classList.remove('on');
    this.isShowTc = false;
    console.log(3);

  }
  
  onFilterChange(event) {
    console.log(4142)
    if(!this.selectedFilterTags.has(event)) {
      let sliceIndex = event.indexOf(':');
      let criteria = event.slice(0, sliceIndex).toLowerCase();
      let condition = event.slice(sliceIndex + 2);
      
      if(criteria === 'moq') {
        this.selectedFilter[criteria][0] = condition;
        for(let tag of this.selectedFilterTags) {
          if(tag.indexOf(criteria.slice(1)+':') !== -1) {
            this.selectedFilterTags.delete(tag);
            break;
          }
        }
        this.selectedFilterTags.add(event);

      } else if(criteria === 'msrp') {
        let indexOfWave = condition.indexOf('~');
        this.selectedFilter[criteria][0] = condition.slice(1, indexOfWave);
        this.selectedFilter[criteria][1] = condition.slice(indexOfWave + 2);
        for(let tag of this.selectedFilterTags) {
          if(tag.indexOf(criteria.slice(1)+':') !== -1) {
            this.selectedFilterTags.delete(tag);
            break;
          }
        }
        this.selectedFilterTags.add(event);

      } else {
        this.selectedFilter[criteria].push(condition);
        this.selectedFilterTags.add(event);
      }
    }
  }

  onCategoryChange(event) {
    if(event.isParent) {
      if(event.isChecked) {
        for(let filter of event.filters) {
          if(this.selectedFilterTags.has(`Category: ${filter}`)) {
            this.selectedFilter['category'].splice(this.selectedFilter['category'].indexOf(filter), 1);
            this.selectedFilterTags.delete(`Category: ${filter}`); 
          }
          this.selectedFilter['category'].push(filter);
          this.selectedFilterTags.add(`Category: ${filter}`);
        }
      } else {
        for(let filter of event.filters) {
          if(this.selectedFilterTags.has(`Category: ${filter}`)) {
            this.selectedFilter['category'].splice(this.selectedFilter['category'].indexOf(filter), 1);
            this.selectedFilterTags.delete(`Category: ${filter}`); 
          }
        }
      }
    } else {
      if(event.isChecked) {
        this.selectedFilter['category'].push(event.category);
        this.selectedFilterTags.add(`Category: ${event.category}`);
      } else {
        this.selectedFilter['category'].splice(this.selectedFilter['category'].indexOf(event.category), 1);
        this.selectedFilterTags.delete(`Category: ${event.category}`);
      }
    }
  }

  // onTagsChange(event) {
  //   this.selectedFilter['tags'] = [];
  //   this.selectedFilterTags.forEach((tag) => {
  //     if(tag.indexOf('Tags:') !== -1) {
  //       this.selectedFilterTags.delete(tag);
  //     }
  //   })
  //   for(let tag of event) {
  //     this.selectedFilter['tags'].push(tag);
  //     this.selectedFilterTags.add(`Tags: ${tag}`);
  //   }
  // }

  deleteFilter(tag) {
    let sliceIndex = tag.indexOf(':');
    let criteria = tag.slice(0, sliceIndex).toLowerCase();
    let condition = tag.slice(sliceIndex + 2);
    if(criteria === 'msrp') {
      this.selectedFilter[criteria].splice(0, 2);
      this.selectedFilterTags.delete(tag);
    } else if(criteria === 'category') {
      this.selectedFilter[criteria].splice(this.selectedFilter[criteria].indexOf(condition), 1);
      this.selectedFilterTags.delete(tag);
      this.filterComponent.checkOff(condition);
    }else {
      this.selectedFilter[criteria].splice(this.selectedFilter[criteria].indexOf(condition), 1);
      this.selectedFilterTags.delete(tag);
    }
  }

  savePrevData() {
    this.location.replaceState('/product');
    this.userDataService.selectedFilter = this.selectedFilter;
    this.userDataService.selectedFilterTags = this.selectedFilterTags;
    this.userDataService.products = this.Products;
    this.userDataService.scrollY = window.scrollY;
    this.userDataService.pageIndex = this.pageIndex;
  }

  saveSelectedFilter() {
    //http selectedFilter
    //userDataService -> savedSelectedFilter update
    console.log('save selected filter')
  }

  searchKeyword(keyword) {
    this.selectedFilterTags = new Set();
    this.selectedFilter = {
      keyword: [],
      category: [],
      Brand: [],
      moq: [],
      msrp: [], 
      Country: []
    };
    this.onFilterChange(`Keyword: ${keyword}`);
    //http api 호출
  }
  
  clickLike(event) {

    event.stopPropagation();

  }


}
