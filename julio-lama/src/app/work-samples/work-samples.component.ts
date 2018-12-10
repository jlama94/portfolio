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

  // // delete this
  // jsonResponse() {
  //   let jsonResponse = [{"c_1": "IE", "m_6": null, "referrer_page_1426264711558": null, "referrer_page_1426551106257": null, "m_1": "6611"},
  //     {"c_1": "Chrome", "m_6": null, "referrer_page_1426264711558": null, "referrer_page_1426551106257": null, "m_1": "2144"},
  //     {"c_1": "Firefox", "m_6": null, "referrer_page_1426264711558": null, "referrer_page_1426551106257": null, "m_1": "374"},
  //     {"c_1": "Mobile Safari", "m_6": null, "referrer_page_1426264711558": null, "referrer_page_1426551106257": null, "m_1": "81"},
  //     {"c_1": "Safari", "m_6": null, "referrer_page_1426264711558": null, "referrer_page_1426551106257": null, "m_1": "16"}];
  //   var browserNames = [];
  //   var browserErrors = [];
  //   $.each(jsonResponse, function (index, value) {
  //     browserNames.push(value.c_1);
  //     browserErrors.push(Number.parseInt(value.m_1));
  //   });
  //
  //   this.chartOptions = {
  //     chart: {
  //       type: "spline"
  //     },
  //     title: {
  //       text: "Browser Errors"
  //     },
  //     subtitle: {
  //       text: "Ensighten Tag Error Browser"
  //     },
  //     xAxis: {
  //       categories: browserNames
  //     },
  //     series: [{
  //       name: "IE",
  //       marker: {
  //         symbol: "square"
  //       },
  //       data: browserErrors
  //     },
  //       {
  //         name: "Google Chrome",
  //         marker: {
  //           symbol: "circle"
  //         },
  //         data: [2456,999,333,2324,90]
  //       }]
  //     // chart: {
  //     //   type: "bar"
  //     // },
  //     // xAxis: {
  //     //   categories: browserNames
  //     // },
  //     // yAxis: {
  //     //   categories: []
  //     // },
  //     // series: [{
  //     //   name: "Errors",
  //     //   data: browserErrors
  //     // },
  //     //   {name: "Errors Two", data: browserErrors, type: "line"}
  //     // ]
  //   };
  //   console.log(browserNames)
  //   console.log(browserErrors);
  //   // var Highcharts = Highcharts;
  //   // var chartConstructor = "chart";
  //   // var chartOptions = {
  //   //   chart: {
  //   //     type: "bar"
  //   //   },
  //   //   xAxis: {
  //   //     categories: []
  //   //   },
  //   //   yAxis: {
  //   //     categories: []
  //   //   },
  //   //   series: [{
  //   //     name: "Random Data",
  //   //     data: [{
  //   //       data: myData,
  //   //       name: "My data"
  //   //     }]
  //   //   }]
  //   // };
  // }


  /**
   * Go to interview.
   */
  goToInterview() {
    this.router.navigateByUrl("/samples/interview");
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
    this.router.navigateByUrl("/samples/depaulApp-members");
  }

}
