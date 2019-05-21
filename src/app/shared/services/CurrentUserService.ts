import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";
import {UserInfo} from "../components/header/user/header.user.component";

export class User
{
  public id:number;
  public firstName:string;
  public lastName:string;
  public fullName:string;
  public isSuperUser:boolean;
  public isMusician:boolean;

  public constructor(user:User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.fullName = user.fullName;
    this.isSuperUser = user.isSuperUser;
    this.isMusician = user.isMusician;
  }
}

@Injectable()
export class CurrentUserService
{
  private currentLoggedInUser:User = null;

  public constructor(
    private jwt: JwtHelper
  ) {

  }


  public SetUser(user:User)
  {
    this.currentLoggedInUser = user;
  }
  public GetCurrentUserAsUserInfoObject() : UserInfo
  {
    let user = this.GetCurrentUser();

    let userI:UserInfo = {
      id:user.id,
      email:"",
      firstname:user.firstName,
      lastname:user.lastName,
      profileImg:'assets/static/images/logo.png'
    }
    return userI;
  }
  public GetCurrentUser()
  {
    if(this.currentLoggedInUser == null)
    {
      let user = this.jwt.decodeToken(localStorage.getItem('token')).data;
      this.currentLoggedInUser = {
        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        fullName:user.firstName + ' ' + user.lastName,
        isSuperUser:user.superUser,
        isMusician:user.musician
      }
    }
    return this.currentLoggedInUser;
  }
}
