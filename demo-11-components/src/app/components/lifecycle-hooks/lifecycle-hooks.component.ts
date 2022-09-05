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

export interface Person {
  name: string;
  age: number;
}

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
  @Input() person: null | Person = {
    name: 'Tom',
    age: 18,
  };

  constructor() {
    log('constructor', 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    log('changes', 1);
  }

  ngOnInit(): void {
    log('ngOnInit', 0);
  }

  ngDoCheck(): void {
    log('ngDoCheck', 1);
  }

  ngAfterContentInit(): void {
    log('ngAfterContentInit', 0);
  }

  ngAfterContentChecked(): void {
    log('ngAfterContentChecked', 1);
  }

  ngAfterViewInit(): void {
    log('ngAfterViewInit', 0);
  }

  ngAfterViewChecked(): void {
    log('ngAfterViewChecked', 1);
  }

  ngOnDestroy(): void {
    log('ngOnDestroy', 0);
  }
}
