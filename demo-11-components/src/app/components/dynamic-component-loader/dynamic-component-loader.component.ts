import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-banner/ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.scss'],
})
export class DynamicComponentLoaderComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    console.log('this.ads', this.ads);
  }
}
