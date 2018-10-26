import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import * as $ from "jquery";


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Blob;
  faDownload = faDownload;



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
    
    
    $('#resumeA').click(function (e) {
      e.preventDefault();
      window.location.href = "/../../assets/Resume.pdf";
    });
  }

  download(): any {
    this.portfolioService.downloadMyResume().subscribe((resumePDF: Blob) => {
      this.resume = resumePDF;
      // Renders the PDF in the browser.
      let file = new Blob([this.resume], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
}
