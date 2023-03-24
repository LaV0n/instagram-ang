import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../services/users.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers()
  }
}
