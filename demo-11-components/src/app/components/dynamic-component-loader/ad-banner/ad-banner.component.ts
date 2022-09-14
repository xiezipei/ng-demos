import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {
  @Input() ads: AdItem[] = [];

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  interval: number | undefined;

  currentAdIndex = -1;

  constructor() {}

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
