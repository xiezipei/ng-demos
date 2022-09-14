import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div>
      <p>{{ data.headline }}</p>
      <p>{{ data.body }}</p>
    </div>
  `,
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
