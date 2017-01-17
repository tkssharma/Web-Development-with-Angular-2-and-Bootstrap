import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{

    canActivate() {
        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean{
        let loggedIn:boolean = Math.random() <0.5;
        if(!loggedIn){
            console.log("LoginGuard: The user is not logged In");
        }
        return loggedIn;
    }
}