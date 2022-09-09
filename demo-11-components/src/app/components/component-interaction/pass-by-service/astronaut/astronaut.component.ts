import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss'],
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
}
