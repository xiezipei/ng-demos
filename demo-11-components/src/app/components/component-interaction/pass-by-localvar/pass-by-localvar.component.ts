import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-by-localvar',
  templateUrl: './pass-by-localvar.component.html',
  styleUrls: ['./pass-by-localvar.component.scss'],
})
export class PassByLocalvarComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
