import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {promise} from 'selenium-webdriver';
import {map} from 'rxjs/operators';
import {RepositoryGitHub} from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private  http: HttpClient) { }


  getRepositories(): Observable <RepositoryGitHub[]> {
    return this.http.get<RepositoryGitHub[]>('http://localhost:8080/julio-lama/repositories');
  }

}
