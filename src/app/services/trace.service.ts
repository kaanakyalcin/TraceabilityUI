import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Trace } from '../Trace';

@Injectable({providedIn: 'root'})

export class TraceService {

  //private apiUrl = "https://yildizproductchainapi.azurewebsites.net/Trace/8690504142966?lotId=1907&expirationDate=2022-05-24";
  private apiUrl = "https://yildizproductchainapi.azurewebsites.net/Trace/";
  constructor(private http:HttpClient) { }

  getTrace(barcode: string, lotId: string, expirationDate: Date) : Observable<Trace> {

    var fullUrl = this.apiUrl + barcode;

    if(lotId.length == 0){
      fullUrl = fullUrl + "?lotId=''";
    }
    else{
      fullUrl = fullUrl + "?lotId=" + lotId;
    }

    if(expirationDate.toString().length != 0){
      fullUrl = fullUrl + '&expirationDate=' + expirationDate;
    }

    //const fullUrl = this.apiUrl + barcode + '?lotId=' + lotId + '&expirationDate=' + expirationDate;
    console.log(fullUrl);
    return this.http.get<Trace>(fullUrl);
    //const trace = of(TRACE);
    //return trace;
  }
}
