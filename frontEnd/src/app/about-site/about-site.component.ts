import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("mat-card").hide();
      if ($("mat-card").is(":hidden")) {
        $("mat-card").slideDown("slow");
      }
    });
  }

}
