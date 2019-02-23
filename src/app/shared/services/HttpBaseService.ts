import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpBaseService{

  protected url:string = environment.apiUrl;
  protected token:string;
  public controller = '/';

  constructor(public http:HttpClient)
  {
  }

  public get(endpoint:string) : Observable<any>
  {
    return this.http.get(this.buildUrl(endpoint), {headers:this.headers()})
      .map(res => {return res})
      .catch(this.handleError);
  }
  public post(endpoint:string, payload:any) : Observable<any>
  {
    return this.http.post(this.buildUrl(endpoint), payload, {headers:this.headers()})
      .map(res => {return res})
      .catch(this.handleError);
  }
  public put(endpoint:string, payload:any) : Observable<any>
  {
    return this.http.put(this.buildUrl(endpoint), payload, {headers:this.headers()})
      .map(res => {return res})
      .catch(this.handleError);
  }
  public delete(endpoint:string) : Observable<any>
  {
    return this.http.delete(this.buildUrl(endpoint), {headers:this.headers()})
      .map(res => {return res})
      .catch(this.handleError);
  }

  private handleError(res:Response)
  {
    let data = res['error'];

    if(data['message'] == null)
      data['message'] = 'Something has gone wrong! Please try again!';

    return Observable.throw(data.message);
  }

  private headers()
  {
    this.token = localStorage.getItem('token');
    return {token:this.token ? this.token : ''};
  }

  public buildUrl(endpoint:string):string
  {
    return this.url + this.controller + endpoint;
  }
}
