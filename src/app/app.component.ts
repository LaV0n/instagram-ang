import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  text = 'start value'

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuth()
  }
}
