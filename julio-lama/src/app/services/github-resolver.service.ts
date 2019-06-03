import { Injectable } from '@angular/core';
import {RepositoryGitHub} from '../models/repository';
import {PortfolioService} from '../services/portfolio.service';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GithubResolverService implements Resolve <RepositoryGitHub[]> {

  constructor(private service: PortfolioService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RepositoryGitHub[]>
    | Promise<RepositoryGitHub[]> | RepositoryGitHub[] {
    return this.service.getRepositories();
  }
}
