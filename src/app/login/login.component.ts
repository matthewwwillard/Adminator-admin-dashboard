import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {AuthService} from "../shared/services/AuthService";
import {Router} from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit
{
  public email:string = "";
  public password:string = "";

  constructor(private loginService:LoginService, private authService:AuthService, private router:Router){}

  ngOnInit(){
    if(this.authService.isAuthenticated())
      this.router.navigate(['/admin/dashboard']);
  }

  public async loginUser()
  {
    if(this.email.length <= 0)
      return alert('Missing email!');
    if(this.password.length <= 0)
      return alert('Missing password!');

    this.loginService.post('/admin',{email:this.email, password:this.password}).subscribe(
      async (res)=>{
        await this.authService.authenticate(true, res.token);
      },
      (err)=>{
        alert(err);
      }
    )
  }
}
