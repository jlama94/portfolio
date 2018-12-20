/* Angular's built-in modules. */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

// For rearranging  nodes
///https://tburleson-layouts-demos.firebaseapp.com/#/docs
import {FlexLayoutModule} from '@angular/flex-layout';


/* Angular Material modules. */
import { MatToolbarModule} from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatTabsModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule} from '@angular/material';
import { MatTooltipModule} from '@angular/material';
import { MatProgressBarModule} from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import { MatListModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { MatDividerModule} from '@angular/material';
import { MatDialogModule} from "@angular/material/dialog";
import { MatGridListModule} from "@angular/material";


/* My portfolio components & services. */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WorkSamplesComponent } from './work-samples/work-samples.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ArtifactsDUComponent } from './artifacts-du/artifacts-du.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioService} from './services/portfolio.service';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HighlighterDirective } from './highlighter.directive';

/* External modules. */
import { HighchartsChartModule } from "highcharts-angular";
import { ArtifactInterviewComponent } from './artifact-interview/artifact-interview.component';




const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  // If path is empty; the default route.
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactMeComponent},
  { path: 'projects', component: WorkSamplesComponent},
  // { path: 'about-this-site', component: AboutSiteComponent},
  { path: 'projects/depaulApp-members', component: ArtifactsDUComponent},
  { path: 'projects/interview', component: ArtifactInterviewComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactMeComponent,
    WorkSamplesComponent,
    FooterComponent,
    AboutSiteComponent,
    MainNavigationComponent,
    ArtifactsDUComponent,
    PageNotFoundComponent,
    HighlighterDirective,
    ArtifactInterviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes), // Configure the routes.
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    HighchartsChartModule,
    MatDialogModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [PortfolioService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
