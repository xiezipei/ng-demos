import { Component, VERSION } from '@angular/core';

/**
 * 物品
 */
export interface Item {
  /** 序号 */
  id: number;
  /** 名称 */
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** 示例 1:数据渲染 */
  message = 'Hello Angular!';

  /** 示例 2:循环渲染列表 */
  items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cat' },
  ];

  /** 示例 3:循条件判断与事件绑定 */
  isShow = false;
  version = VERSION;
  showVersion() {
    console.log('version', this.version);
    this.isShow = true;
  }
}
