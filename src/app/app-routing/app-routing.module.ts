import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

// layout Imports 
import { NonMemberLayoutComponent } from '../components/layout/non-member-layout/non-member-layout.component';
import { MemberLayoutComponent } from '../components/layout/member-layout/member-layout.component';
import { IntroducePageComponent } from '../components/pages/introduce-page/introduce-page.component';
import { HelpdeskTermsComponent } from '../components/pages/help-page/helpdesk-terms/helpdesk-terms.component';
import { LoginPageComponent } from '../components/pages/accounts/login-page/login-page.component';
import { SignupPageComponent } from '../components/pages/accounts/signup-page/signup-page.component';
import { BrandPageComponent } from '../components/pages/brand/brand-page/brand-page.component';
import { ProductPageComponent } from '../components/pages/products/product-page/product-page.component';
import { ProductDetailPageComponent } from '../components/pages/products/product-detail-page/product-detail-page.component';
import { BrandProductPageComponent } from '../components/pages/brand/brand-product-page/brand-product-page.component';



const routes: Routes = [
  {
    path: '',
    component: NonMemberLayoutComponent,
    children: [
      {
        path: '',
        component: IntroducePageComponent
      },
      {
        path: 'helpdesk/terms',
        component: HelpdeskTermsComponent
      }
    ]
  },
  { 
    path: 'login',
    component: LoginPageComponent
  }, 
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'members',
    component: MemberLayoutComponent,
    children: [
      {
        path: 'brands',
        component: BrandPageComponent
      },
      {
        path: 'brands/br_id/:id',
        component: BrandProductPageComponent
      },
      {
        path: 'product',
        component: ProductPageComponent
      },
      {
        path: 'product/detail/:id',
        component: ProductDetailPageComponent
      },
    ]
  }
]



@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { 
  
 }
