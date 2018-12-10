import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import * as $ from "jquery";


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    $(document).ready(function () {
      $("#downloadMessage").hide();
      if ( $("#downloadMessage").is(":hidden")) {
        $("#downloadMessage").fadeIn(3000);
      }

      $("mat-card").hide();
      if ($("mat-card").is(":hidden")) {
        $("mat-card").slideDown("slow");
      }
    });
  }
}
