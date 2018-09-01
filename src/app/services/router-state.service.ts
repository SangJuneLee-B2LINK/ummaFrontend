import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  previousUrl;
  currentUrl;

  headerComp;
  productListComp;

  constructor(
    public router: Router
  ) { }

  loadRouting() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
        this.previousUrl = this.currentUrl;
        this.currentUrl = evt.url;
    });
  }
}
