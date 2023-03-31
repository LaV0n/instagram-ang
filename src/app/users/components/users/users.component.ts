import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getUsers(page: number) {
    this.users$ = this.userService.getUsers(page)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getUsers(params['page'] ? params['page'] : 1)
    })
  }

  nextUsersHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    this.router.navigateByUrl(`/users?page=${nextPage}`)
  }
}
