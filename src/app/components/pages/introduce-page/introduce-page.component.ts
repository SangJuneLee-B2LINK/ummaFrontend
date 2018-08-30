import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduce-page',
  templateUrl: './introduce-page.component.html',
  styleUrls: ['./introduce-page.component.scss']
})
export class IntroducePageComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle("Welcome to Umma")
  }

  ngOnInit() {
  }

}
