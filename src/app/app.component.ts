import { Component, OnInit } from '@angular/core';
import { RouterStateService } from './services/router-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(
    public routerService: RouterStateService
  ) {}

  ngOnInit() {
    this.routerService.loadRouting();
  }
}

