import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-binding',
  templateUrl: './basic-binding.component.html',
  styleUrls: ['./basic-binding.component.scss'],
})
export class BasicBindingComponent implements OnInit {
  actionName = 'Create and set an attribute';

  isSpecial = true;
  classExpression = 'special clearance'; // style class，见样式文件

  border = '.5rem dashed black';
  styleExpression = 'border: solid red 3px';

  canSave = true;
  color = 'blue';

  constructor() {}

  ngOnInit(): void {}
}
