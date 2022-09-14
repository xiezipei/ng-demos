import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-sample',
  templateUrl: './pipes-sample.component.html',
  styleUrls: ['./pipes-sample.component.scss'],
})
export class PipesSampleComponent implements OnInit {
  birthday = new Date(1988, 3, 15);

  toggle = true;

  constructor() {}

  ngOnInit(): void {}

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
