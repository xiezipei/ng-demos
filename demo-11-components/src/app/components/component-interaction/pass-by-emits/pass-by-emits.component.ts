import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pass-by-emits',
  templateUrl: './pass-by-emits.component.html',
  styleUrls: ['./pass-by-emits.component.scss'],
})
export class PassByEmitsComponent implements OnInit {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  constructor() {}

  ngOnInit(): void {}

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
