import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";

/* External imports*/
import {PortfolioService} from '../services/portfolio.service';
import {RepositoryGitHub} from '../models/repository';

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})

export class WorkSamplesComponent implements OnInit {

  repoArray: RepositoryGitHub[] = new Array();

  constructor(public router: Router,
              private activatedRoute: ActivatedRoute,
              private service: PortfolioService) { }

  routetoDU = "https://depaulapp.herokuapp.com/#/";


  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: {Repository: RepositoryGitHub[]} ) => {
      this.repoArray = data.Repository;
      console.log(this.repoArray);
    });
  }

  /**
   * Go to interview.
   */
  goToInterview() {
    this.router.navigateByUrl("/projects/interview");
  }

  /**
   * External link.
   */
  goToDUapp() {
    return window.location.href = this.routetoDU;
  }

  /**
   * Go back button.
   */
  goToMembers () {
    this.router.navigateByUrl("/projects/depaulApp-members");
  }

}
