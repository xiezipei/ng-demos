import { Injectable } from '@angular/core';
import { AdItem } from './ad-banner/ad-item';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: '小安',
        bio: 'angular',
      }),
      new AdItem(HeroProfileComponent, {
        name: '小微',
        bio: 'vue',
      }),
      new AdItem(HeroProfileComponent, {
        name: '小瑞',
        bio: 'react',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'angular yyds',
        body: 'aaaaa',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'vue yyds',
        body: 'vvvvvvv',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'react yyds',
        body: 'rrrrrr',
      }),
    ];
  }
}
