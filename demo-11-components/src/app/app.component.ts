import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-11-components';
  count = 0;
  isShowLifecycleHook: boolean = false;
  hero: null | { name: string; age: number } = {
    name: 'Tom',
    age: 18,
  };

  updateCount() {
    this.count = this.count + 1;
  }

  showLifecycleHook() {
    this.isShowLifecycleHook = !this.isShowLifecycleHook;
    if (!this.isShowLifecycleHook) {
      this.count = 0;
    }
  }

  updateHero() {
    this.hero = null;
  }

  resetHero() {
    this.hero = {
      name: 'Tom',
      age: 18,
    };
  }
}
