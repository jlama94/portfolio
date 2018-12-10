import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Message} from '../contact-me/message';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private  http: HttpClient) { }

}
