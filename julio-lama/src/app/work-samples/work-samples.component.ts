import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";

/* External imports*/
import * as $ from "jquery";
import * as Highcharts from "highcharts";
import * as _ from "lodash";

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})

export class WorkSamplesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  routetoDU = "https://depaulapp.herokuapp.com/#/";

  // Highcharts = Highcharts;
  // chartConstructor = "char";
  // chartOptions;

  isLoading = false;

  ngOnInit() {
    $(document).ready(function() {
      // Hide everything for a while; the default time of jquery.
      $("mat-spinner").hide();
      $("#depaulCard").hide();
      $("#interviewCard").hide();
      $("#shapesCard").hide();

      // Show it again
      if ($("#depaulCard").is(":hidden")) {
        $("#depaulCard").slideDown("slow");
      }
      if ($("#interviewCard").is(":hidden")) {
        $("#interviewCard").slideDown("slow");
      }
      if ($("#shapesCard").is(":hidden")) {
        $("#shapesCard").slideDown("slow");
      }
    })
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
