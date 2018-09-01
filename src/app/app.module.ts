import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

// app basic modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

// app layout
import { CommonFooterComponent } from './components/layout/common-footer/common-footer.component';
import { CommonHeaderComponent } from './components/layout/common-header/common-header.component';
import { MemberLayoutComponent } from './components/layout/member-layout/member-layout.component';
import { NonMemberHeaderComponent } from './components/layout/non-member-header/non-member-header.component';
import { NonMemberLayoutComponent } from './components/layout/non-member-layout/non-member-layout.component';

// app pages
import { BrandPageComponent } from './components/pages/brand/brand-page/brand-page.component';
import { BrandProductPageComponent } from './components/pages/brand/brand-product-page/brand-product-page.component';
import { HelpdeskPrivacyComponent } from './components/pages/help-page/helpdesk-privacy/helpdesk-privacy.component';
import { HelpdeskSearchDetailComponent } from './components/pages/help-page/helpdesk-search-detail/helpdesk-search-detail.component';
import { HelpdeskSearchListComponent } from './components/pages/help-page/helpdesk-search-list/helpdesk-search-list.component';
import { HelpdeskSearchResultComponent } from './components/pages/help-page/helpdesk-search-result/helpdesk-search-result.component';
import { HelpdeskTermsComponent } from './components/pages/help-page/helpdesk-terms/helpdesk-terms.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InquiryDetailPageComponent } from './components/pages/inquiry/inquiry-detail-page/inquiry-detail-page.component';
import { InquiryListPageComponent } from './components/pages/inquiry/inquiry-list-page/inquiry-list-page.component';
import { IntroducePageComponent } from './components/pages/introduce-page/introduce-page.component';
import { LoginPageComponent } from './components/pages/accounts/login-page/login-page.component';
import { MyInfoPageComponent } from './components/pages/accounts/my-info-page/my-info-page.component';
import { SignupPageComponent } from './components/pages/accounts/signup-page/signup-page.component';
import { TransactionListPageComponent } from './components/pages/transaction/transaction-list-page/transaction-list-page.component';
import { TransactionDetailPageComponent } from './components/pages/transaction/transaction-detail-page/transaction-detail-page.component';
import { WishlistComponent } from './components/pages/accounts/wishlist/wishlist.component';
import { ProductPageComponent } from './components/pages/products/product-page/product-page.component';
import { ProductDetailPageComponent } from './components/pages/products/product-detail-page/product-detail-page.component';
import { ConnectMailComponent } from './components/reuses/connect-mail/connect-mail.component';
import { FilterConditionComponent } from './components/reuses/filter-condition/filter-condition.component';
import { ProductCardComponent } from './components/reuses/product-card/product-card.component';
import { ChoiceTagComponent } from './components/reuses/choice-tag/choice-tag.component';
import { BrandsService } from './services/brands.service';
import { ProductsService } from './services/products.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CommonFooterComponent,
    CommonHeaderComponent,
    MemberLayoutComponent,
    NonMemberHeaderComponent,
    NonMemberLayoutComponent,
    BrandPageComponent,
    BrandProductPageComponent,
    HelpdeskPrivacyComponent,
    HelpdeskSearchDetailComponent,
    HelpdeskSearchListComponent,
    HelpdeskSearchResultComponent,
    HelpdeskTermsComponent,
    HomePageComponent,
    InquiryDetailPageComponent,
    InquiryListPageComponent,
    IntroducePageComponent,
    LoginPageComponent,
    MyInfoPageComponent,
    SignupPageComponent,
    TransactionListPageComponent,
    TransactionDetailPageComponent,
    WishlistComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    ConnectMailComponent,
    FilterConditionComponent,
    ProductCardComponent,
    ChoiceTagComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [BrandsService,ProductsService,CountryService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
