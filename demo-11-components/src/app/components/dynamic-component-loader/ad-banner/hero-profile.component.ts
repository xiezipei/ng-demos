import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div>
      <p>{{ data.name }}</p>
      <p>{{ data.bio }}</p>
    </div>
  `,
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
