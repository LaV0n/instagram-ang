import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [UsersComponent, ProfileComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
