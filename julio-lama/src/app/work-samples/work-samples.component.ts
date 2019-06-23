import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

/* External imports*/
import {RepositoryGitHub} from '../models/repository';

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})

export class WorkSamplesComponent implements OnInit {

  repoArray: RepositoryGitHub[] = new Array();

  constructor(public router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: {Repository: RepositoryGitHub[]} ) => {
      this.repoArray = data.Repository;
    });
  }

  /**
   * Go to interview.
   */
  goToInterview() {
    this.router.navigateByUrl('/projects/interview');
  }


  /**
   * Go back button.
   */
  goToMembers () {
    this.router.navigateByUrl('/projects/depaulApp-members');
  }

}
