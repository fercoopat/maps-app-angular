import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #map {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class FullScreenComponent implements OnInit {
  ngOnInit(): void {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-82.43022255503733, 23.111867119646554],
      zoom: 15,
    });
  }
}
