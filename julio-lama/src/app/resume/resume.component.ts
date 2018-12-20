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

  }
}
