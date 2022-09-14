import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-binding',
  templateUrl: './basic-binding.component.html',
  styleUrls: ['./basic-binding.component.scss'],
})
export class BasicBindingComponent implements OnInit {
  actionName = 'Create and set an attribute';

  constructor() {}

  ngOnInit(): void {}
}
