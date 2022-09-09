import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/types';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit {
  heros: Hero[] = [
    { name: 'Tom', msg: 'Hi' },
    { name: 'Tony', msg: 'Hello' },
    { name: 'Petter', msg: 'Halo' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
