import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { NotificationMessage} from "../contact-me/contact-me.component";

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageSentComponent>, @Inject (MAT_DIALOG_DATA)public data: NotificationMessage) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
