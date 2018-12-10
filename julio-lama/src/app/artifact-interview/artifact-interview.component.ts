import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artifact-interview',
  templateUrl: './artifact-interview.component.html',
  styleUrls: ['./artifact-interview.component.css']
})
export class ArtifactInterviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProjects() {
    this.router.navigateByUrl("/samples")
  }

}
