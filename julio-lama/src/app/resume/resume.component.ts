import {Component,OnInit} from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import {PDFProgressData} from "pdfjs-dist";


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  /* Path to my Resume.pdf */
  urlPath: String = "./assets/Resume.pdf";


  // value of the spinner.
  value = 0;

  isHidden = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {

  }

  onProgress(progressData: PDFProgressData) {
    while (this.value <= progressData.loaded) {
      if (this.value == progressData.total) {
        this.isHidden = true;
      }
      this.value += 1;
    }
  }
}
