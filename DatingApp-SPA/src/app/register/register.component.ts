import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
@Input() valuesFromHome: any;
@Output() cancleRegister = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Register Successfull');
    }, error => {
      console.log(error);
    });

  }
  cancle() {
    this.cancleRegister.emit(false);
    console.log('Cancelled');
  }
}
