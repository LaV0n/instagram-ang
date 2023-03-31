import { Component } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from '../../../core/services/beauty-logger.service'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit() {
    this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.add()
    this.beautyLoggerService.log('add', 'info')
  }
}
