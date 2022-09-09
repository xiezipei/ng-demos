import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { heroes, noNameHero } from 'src/app/shared/datas';
import { Hero } from 'src/app/shared/types';
import { PassByLocalvarComponent } from './pass-by-localvar/pass-by-localvar.component';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit, AfterViewInit {
  title1: string = '通过 `@Input()` 把数据从父组件传到子组件';
  heroes: Hero[] = heroes;

  title2: string = '通过 `setter` 截听输入属性值的变化';
  noNameHero = noNameHero;

  title3: string = '通过 `ngOnChanges()` 来截听输入属性值的变化';
  major = 1;
  minor = 23;

  title4: string = '父组件监听子组件的事件';
  agreed = 0;
  disagreed = 0;

  title5: string = '父组件与子组件通过本地变量互动';

  title6: string = '父级调用 `@ViewChild()`';
  @ViewChild(PassByLocalvarComponent)
  private passByLocalvarComponent!: PassByLocalvarComponent;
  secondsV() {
    return 0;
  }
  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(
      () => (this.secondsV = () => this.passByLocalvarComponent.seconds),
      0
    );
  }
  startV() {
    this.passByLocalvarComponent.start();
  }
  stopV() {
    this.passByLocalvarComponent.stop();
  }

  constructor() {}

  ngOnInit(): void {}

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0; // 大版本加一，小版本重置为零
  }

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
