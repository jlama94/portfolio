import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastModified: Date;
  constructor() { }

  ngOnInit() {
  }

  dateModified(): string {
    // return this.lastModified = new Date(document.lastModified);
    const todayDate = new Date(document.lastModified);
    const formattedDate = todayDate.toDateString();
    return formattedDate;
  }

}
