import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product;
  
  productId;
  imageSrc;
  isWish;
  matchPercent;
  itemName;
  brandName;
  pieces;
  price;

  isShowConnectMail = false;

  constructor(
    public userDataService: UserDataService
  ) { }
  
  ngOnInit() {
    this.productId = this.product.productid;
    this.imageSrc = this.product.imageSrc;
    this.isWish = this.product.isWish;
    this.matchPercent = this.product.matchPercent;
    this.itemName = this.product.itemName;
    this.brandName = this.product.brandName;
    this.pieces = this.product.pieces;
    this.price = this.product.price;
  }

  clickLike(event) {
  
    console.log('like add')
    event.stopPropagation();
  }

  clickMail(event) {
    this.isShowConnectMail = true;
    event.stopPropagation();
  }

  closeModal() {
    this.isShowConnectMail = false;
  }
}
