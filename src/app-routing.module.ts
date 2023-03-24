import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { ParentComponent } from './app/parent/parent.component'
import { ChildComponent } from './app/parent/child/child.component'
import { TodosComponent } from './app/todos/todos.component'
import { LoginComponent } from './app/login/login.component'
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component'
import { UsersComponent } from './app/users/users.component'
import { ProfileComponent } from './app/profile/profile.component'

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
