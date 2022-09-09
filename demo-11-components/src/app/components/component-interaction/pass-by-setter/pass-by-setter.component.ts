import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-by-setter',
  templateUrl: './pass-by-setter.component.html',
  styleUrls: ['./pass-by-setter.component.scss'],
})
export class PassBySetterComponent implements OnInit {
  @Input() title: string = '';

  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';

  constructor() {}

  ngOnInit(): void {}
}
