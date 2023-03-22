import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BeautyLoggerService } from '../services/beauty-logger.service'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
    ]),
    password: new FormControl(''),
  })
  constructor(private beautyLoggerService: BeautyLoggerService) {}

  get email() {
    return this.loginForm.get('email')!
  }

  onSubmit() {
    this.beautyLoggerService.log(JSON.stringify(this.loginForm.value), 'success')
  }
}
