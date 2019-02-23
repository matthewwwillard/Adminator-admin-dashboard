import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {CurrentUserService} from "./CurrentUserService";

@Injectable()
export class AuthService {
  private authObservable: Subject<boolean> = new Subject<boolean>();
  private perms = [];
  private permIds = [];

  constructor(
    private jwt: JwtHelper,
    private router: Router,
    private currentUser:CurrentUserService
  ) {}

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return !this.jwt.isTokenExpired(token);
  }

  public authListener(): Observable<boolean> {
    return this.authObservable.asObservable();
  }


  public async authenticate(login: boolean, token: string, redirectTo:string = null) {
    console.log('authenticate called ', login);
    if (login) {
      localStorage.setItem('token', token);
      const data = this.jwt.decodeToken(token);

      let user = data.data;

      this.currentUser.SetUser({
        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        fullName:user.firstName + ' ' + user.lastName,
        isSuperUser:user.superUser,
        isMusician:user.musician
      });

      if(user['forcePasswordReset'] != null && user.forcePasswordReset) {
        await this.router.navigate(['admin','reset-password']);
      } else {
        if(redirectTo != null)
        {

        }
        else
          await this.router.navigate(['admin']);
      }
    } else {
      localStorage.removeItem('token');
    }
    this.authObservable.next(login);
  }
}
