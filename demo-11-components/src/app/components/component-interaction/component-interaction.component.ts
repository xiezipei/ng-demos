import { Component, OnInit } from '@angular/core';
import { heroes, noNameHero } from 'src/app/shared/fake-datas';
import { Hero } from 'src/app/shared/types';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit {
  title1: string = '通过 `@Input()` 把数据从父组件传到子组件';
  title2: string = '通过 `setter` 截听输入属性值的变化';
  heroes: Hero[] = heroes;
  noNameHero = noNameHero;

  constructor() {}

  ngOnInit(): void {}
}
