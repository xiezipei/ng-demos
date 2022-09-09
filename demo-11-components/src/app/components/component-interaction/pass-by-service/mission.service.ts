import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// 该服务实例的作用域被限制在父组件和其子组件内。这个组件子树之外的组件将无法访问该服务或者与它们通讯
@Injectable()
export class MissionService {
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    console.log('this.missionAnnouncedSource', this.missionAnnouncedSource);
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    console.log('this.missionConfirmedSource', this.missionConfirmedSource);
    this.missionConfirmedSource.next(astronaut);
  }
}
