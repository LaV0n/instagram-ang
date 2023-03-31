import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { ParentComponent } from './components/parent/parent.component'
import { ChildComponent } from './components/parent/child/child.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [ParentComponent, ChildComponent, PageNotFoundComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
