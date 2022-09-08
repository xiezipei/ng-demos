import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styleUrls: ['./no-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
