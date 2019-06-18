/* Angular's built-in modules. */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

// For rearranging  nodes
// https://tburleson-layouts-demos.firebaseapp.com/#/docs
import { FlexLayoutModule} from '@angular/flex-layout';


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
import { MatDialogModule} from'@angular/material/dialog';
import { MatGridListModule} from '@angular/material';



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
import { TranslateModule} from '@ngx-translate/core';
// For embedding my Resume.pdf
import { PdfViewerModule } from 'ng2-pdf-viewer';



import { ArtifactInterviewComponent } from './artifact-interview/artifact-interview.component';
import { AppRoutingModule} from './app-routing.module';
import { GithubResolverService} from './services/github-resolver.service';



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
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
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
    MatDialogModule,
    MatGridListModule,
    FlexLayoutModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  providers: [PortfolioService, GithubResolverService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
