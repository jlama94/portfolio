import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Message} from '../contact-me/message';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private  http: HttpClient) { }


  message: Message; // Para modelar el mensaje.

  /**
   *
   * @returns {Observable<Blob>}
   */
  downloadMyResume() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    // return this.http.get('/api/download', {headers: headers, responseType: 'blob'});
    return this.http.get("/portfolio/download", {headers: headers, responseType: 'blob'});
  }


  /**
   *
   * @param message
   * @returns {Observable<Object>}
   */
  sendEmail(message) {
    this.message = message;
    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'responseType': 'json'
    });
    // return this.http.post('/api/emailReceived', this.message, {headers: headers});
    return this.http.post("/portfolio/emailReceived", this.message, {headers: headers});

    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.set('Accept', 'application/json');
    // return this.http.post('http://localhost:8080/api/emailReceived', this.message, {headers: headers});
  }
}
