import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { TodosComponent } from './todos/todos.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { AppRoutingModule } from '../app-routing.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodosComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
