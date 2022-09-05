import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { log } from 'src/app/shared/utils';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
})
export class LifecycleHooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() count: number = 0;

  constructor() {
    log('constructor');
  }

  ngDoCheck(): void {
    log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    log('changes');
  }

  ngOnInit(): void {
    log('ngOnInit');
  }
}
