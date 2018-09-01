import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  //header 노출 이미지, 이름
  companyLogoSrc;
  companyName;

  //저장된 필터 객체 값
  savedSelectedFilter;
  //화면 전환 시 돌아올 때 보여줄 캐시 값
  selectedFilter;
  selectedFilterTags;
  products;
  scrollY;
  pageIndex;
  
  constructor() { 
    this.savedSelectedFilter = {
      keyword: ['asdf'],
      category: ['Face Oil', 'Sun Care', 'Cleansing Oils', 'Lipstick', 'Lip Tint', 'Lip Gloss', 'Lip Balm & Treatment'],
      Brand: ['MAC'],
      moq: [1000],
      msrp: [13, 19], 
      Country: ['Republic of Korea']
    };
  }

  serviceInit() {
    
  }
}
