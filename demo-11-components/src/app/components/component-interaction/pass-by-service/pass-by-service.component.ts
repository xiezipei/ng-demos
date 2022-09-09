import { Component, OnInit } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-pass-by-service',
  templateUrl: './pass-by-service.component.html',
  styleUrls: ['./pass-by-service.component.scss'],
  providers: [MissionService],
})
export class PassByServiceComponent implements OnInit {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe((astronaut) => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit(): void {}

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
