import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  row: string = "row";

  constructor(private router: Router,
              private googleAnalytics: Angulartics2GoogleAnalytics) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any> window).ga ('set', 'page', event.urlAfterRedirects);
        (<any> window).ga('send', 'pageview');
      }
    });
    this.googleAnalytics.startTracking();
  }

  ngOnInit() {
  }

}
