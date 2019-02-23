import {Injectable} from "@angular/core";
import {HttpBaseService} from "../shared/services/HttpBaseService";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService extends HttpBaseService
{
    public controller = '/auth/login';

  constructor(public http:HttpClient) {
    super(http);
  }

}
