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

  updateCount() {
    if (this.isShowLifecycleHook) {
      this.count = this.count + 1;
    }
  }

  showLifecycleHook() {
    this.isShowLifecycleHook = !this.isShowLifecycleHook;
    if (!this.isShowLifecycleHook) {
      this.count = 0;
    }
  }
}
