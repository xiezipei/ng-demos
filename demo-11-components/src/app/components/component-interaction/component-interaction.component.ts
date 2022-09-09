import { Component, OnInit } from '@angular/core';
import { fakeHeros, fakeTitle } from 'src/app/shared/fake-datas';
import { Hero } from 'src/app/shared/types';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit {
  heros: Hero[] = fakeHeros;
  title: string = fakeTitle;

  constructor() {}

  ngOnInit(): void {}
}
