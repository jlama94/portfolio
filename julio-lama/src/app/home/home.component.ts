import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastModified: Date;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any> window).ga ('set', 'page', event.urlAfterRedirects);
        (<any> window).ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".container").hide();
      if ( $(".container").is(":hidden")) {
        $(".container").slideDown("slow");
      }
    });
    this.lastModified = new Date(document.lastModified);
  }

}
