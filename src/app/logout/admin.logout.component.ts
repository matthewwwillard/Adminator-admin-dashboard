import {Component} from "@angular/core";
import {AuthService} from "../shared/services/AuthService";
import {CurrentUserService} from "../shared/services/CurrentUserService";
import {Router} from "@angular/router";

@Component(
  {
    selector:'logout',
    template:'<h1>Logging Out!</h1>'
  }
)
export class AdminLogoutComponent
{
  constructor(private auth:AuthService, private user:CurrentUserService, private router:Router)
  {
      this.auth.authenticate(false,null, "login");
      this.router.navigate(['login']);
  }
}
