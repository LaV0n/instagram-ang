import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environmentDevelopment } from '../../environments/environment.development'
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
  private httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environmentDevelopment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environmentDevelopment.baseNetworkUrl}/users`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
