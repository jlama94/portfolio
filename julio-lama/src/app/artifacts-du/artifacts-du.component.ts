import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ArtifactsDUDataSource } from './artifacts-du-datasource';
import { Router} from "@angular/router";


@Component({
  selector: 'app-artifacts-du',
  templateUrl: './artifacts-du.component.html',
  styleUrls: ['./artifacts-du.component.css']
})
export class ArtifactsDUComponent implements OnInit {
  constructor(private router: Router) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ArtifactsDUDataSource;    // The data source is the ArtifactsDU-Data source.

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'major'];

  ngOnInit() {
    this.dataSource = new ArtifactsDUDataSource(this.paginator, this.sort);
  }

  /**
   * Goes back to project page.
   */
  goToProjects() {
    this.router.navigateByUrl("/projects")
  }
}

