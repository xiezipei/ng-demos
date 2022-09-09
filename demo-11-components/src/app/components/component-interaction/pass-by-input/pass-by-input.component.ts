import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/types';

@Component({
  selector: 'app-pass-by-input',
  templateUrl: './pass-by-input.component.html',
  styleUrls: ['./pass-by-input.component.scss'],
})
export class PassByInputComponent implements OnInit {
  @Input() heros: Hero[] = [];
  @Input('title') titleName = ''; // 别名“title”

  constructor() {}

  ngOnInit(): void {}
}
