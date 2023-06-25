import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sample-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  otpCode = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    if (this.username === 'user1' && this.password === '1234') {
      this.router.navigateByUrl('auth/landing');
    } else {
      alert('Username or password is incorrect');
    }
  }
}
