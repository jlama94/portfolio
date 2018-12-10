import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { PortfolioService} from '../services/portfolio.service';
import { Message } from './message';
import { ErrorStateMatcher, MatDialog, MatDialogRef} from '@angular/material';
import * as $ from "jquery";
import {MessageSentComponent} from "../message-sent/message-sent.component";


/* A class that implements ErrorStateMatcher */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface NotificationMessage {
  notification: string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})



export class ContactMeComponent implements OnInit {

  constructor(private service: PortfolioService) {}

  // onInit of this component instantiate the FormGroup.
  ngOnInit(): void {
    $(document).ready(function () {
      $("mat-card").hide();
      if ( $("mat-card").is(":hidden")) {
        $("mat-card").slideDown("slow");
      }
    });
  }
}
