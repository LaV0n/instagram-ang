import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environmentDevelopment } from '../../../environments/environment.development'
import { map, Observable } from 'rxjs'

export interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environmentDevelopment.baseNetworkUrl}/users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
