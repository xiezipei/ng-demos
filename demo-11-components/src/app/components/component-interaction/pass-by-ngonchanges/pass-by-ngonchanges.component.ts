import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-by-ngonchanges',
  templateUrl: './pass-by-ngonchanges.component.html',
  styleUrls: ['./pass-by-ngonchanges.component.scss'],
})
export class PassByNgonchangesComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
