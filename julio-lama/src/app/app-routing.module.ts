import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { AboutMeComponent} from "./about-me/about-me.component";
import { ResumeComponent} from "./resume/resume.component";
import { ContactMeComponent} from "./contact-me/contact-me.component";
import { WorkSamplesComponent} from "./work-samples/work-samples.component";
import { ArtifactsDUComponent} from "./artifacts-du/artifacts-du.component";
import { ArtifactInterviewComponent} from "./artifact-interview/artifact-interview.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  // If path is empty; the default route.
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactMeComponent},
  { path: 'projects', component: WorkSamplesComponent, children: [
      {path: 'dePaulApplication-members', component: ArtifactsDUComponent}
    ]},
  // { path: 'about-this-site', component: AboutSiteComponent},
  { path: 'projects/depaulApp-members', component: ArtifactsDUComponent},
  { path: 'projects/interview', component: ArtifactInterviewComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
