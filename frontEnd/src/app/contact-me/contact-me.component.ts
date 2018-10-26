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

  contactForm: FormGroup; // form
  message: Message;

  errorMatcher: ErrorStateMatcher;


  constructor(private service: PortfolioService) {}

  // onInit of this component instantiate the FormGroup.
  ngOnInit(): void {
    $(document).ready(function () {
      $("mat-card").hide();
      if ( $("mat-card").is(":hidden")) {
        $("mat-card").slideDown("slow");
      }
    });
    this.contactForm = new FormGroup ({
      from: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]),
      // telephone: new FormControl('',[Validators.pattern('^(\\+\\d{1,3}[- ]?)?\\d{10}$')]),
      telephone: new FormControl('', Validators.required),
      body: new FormControl('', [Validators.required])
    });
    this.errorMatcher = new ErrorStateMatcher();
  }


  resetForm() {
    this.contactForm.reset();
  }

  /**
   *
   * @param form
   */
  sendEmail(form: FormGroup) {
    this.message = new Message();
    this.message = form.value;
    this.service.sendEmail(this.message).subscribe((observer: Message) => {
    }, (error) => {
      if (error) {
        console.log (error.status + ' ' + error);
      }
    });
    alert("Your message was sent!");
    this.contactForm.reset();
  }
}
