import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";

/* External imports*/
import * as $ from "jquery";

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})

export class WorkSamplesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  routetoDU = "https://depaulapp.herokuapp.com/#/";


  ngOnInit() {

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
