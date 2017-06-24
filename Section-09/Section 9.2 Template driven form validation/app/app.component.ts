import { Component, OnInit ,module} from '@angular/core';
import  {User}  from './user.interface';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
  public user: User;

  ngOnInit() {
    this.user = {
      name: '',
      password :''
    };
  }
  save(model: User, isValid: boolean) {
    if(! isValid){
      return;
    }
    console.log(model, isValid);
  }
}