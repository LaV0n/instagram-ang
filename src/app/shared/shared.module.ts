import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingComponent } from './components/routing/routing.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [RoutingComponent],
  imports: [CommonModule, RouterModule],
  exports: [RoutingComponent],
})
export class SharedModule {}
