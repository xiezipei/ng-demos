import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template: `
    <hr />
    <div class="parent">
      <h2>Peek-A-Boo</h2>
      <!-- 创建或销毁按钮 -->
      <button type="button" (click)="toggleChild()">
        {{ hasChild ? 'Destroy' : 'Create' }} PeekABooComponent
      </button>
      <!-- 更新按钮 -->
      <button type="button" (click)="updateHero()" [hidden]="!hasChild">
        Update Hero
      </button>

      <div class="info">
        <!-- 子组件 -->
        <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>
        <!-- 日志信息 -->
        <h3>Lifecycle Hook Log</h3>
        <div *ngFor="let msg of hookLog" class="log {{ getClassByMsg(msg) }}">
          {{ msg }}
        </div>
      </div>
    </div>
  `,
  styles: [
    '.bg-red {background:red;color:white;margin-bottom:4px;};',
    '.bg-green {background:#00b156;color:white;margin-bottom:4px;};',
  ],
  providers: [LoggerService],
})
export class PeekABooParentComponent {
  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  /**
   * 切换创建或销毁子组件（通过`*ngif`）
   */
  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  /**
   * 更新子组件
   */
  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

  /**
   * 根据消息获取 class
   */
  getClassByMsg(msg: string) {
    if (
      msg.indexOf('name is') !== -1 ||
      msg.indexOf('OnInit') !== -1 ||
      msg.indexOf('AfterContentInit') !== -1 ||
      msg.indexOf('AfterViewInit') !== -1 ||
      msg.indexOf('OnDestroy') !== -1
    ) {
      return 'bg-red';
    }
    if (
      msg.indexOf('OnChanges') !== -1 ||
      msg.indexOf('DoCheck') !== -1 ||
      msg.indexOf('AfterContentChecked') !== -1 ||
      msg.indexOf('AfterViewChecked') !== -1
    ) {
      return 'bg-green';
    }
    return '';
  }
}
