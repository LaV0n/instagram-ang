import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ParentComponent } from './components/parent/parent.component'
import { ChildComponent } from './components/parent/child/child.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
