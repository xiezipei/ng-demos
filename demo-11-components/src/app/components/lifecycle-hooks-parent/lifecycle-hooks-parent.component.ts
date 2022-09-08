import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-parent',
  templateUrl: './lifecycle-hooks-parent.component.html',
  styleUrls: ['./lifecycle-hooks-parent.component.scss'],
})
export class LifecycleHooksParentComponent {
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
