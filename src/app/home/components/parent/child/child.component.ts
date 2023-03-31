import { Component } from '@angular/core'
import { ValueService } from '../../../services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from '../../../../core/services/beauty-logger.service'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit() {
    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.dec()
    this.beautyLoggerService.log('dec', 'error')
  }
}
