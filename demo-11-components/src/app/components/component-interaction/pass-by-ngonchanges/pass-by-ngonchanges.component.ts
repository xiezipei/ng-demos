import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pass-by-ngonchanges',
  templateUrl: './pass-by-ngonchanges.component.html',
  styleUrls: ['./pass-by-ngonchanges.component.scss'],
})
export class PassByNgonchangesComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() major = 0;
  @Input() minor = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        console.log(`${propName} 设置初始值 ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        console.log(`${propName} 修改值为 ${from}`);
      }
    }
  }

  ngOnInit(): void {}
}
