import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        width: 400px;
        z-index: 999;
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!: ElementRef;

  map!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-82.43022255503733, 23.111867119646554];

  constructor() {}

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  ngAfterViewInit(): void {
    /* MAP INITIALIZER */
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    /* ZOOM LISTENER */
    this.map.on('zoom', (event) => {
      this.zoomLevel = this.map.getZoom();
    });

    /* ZOOM END LISTENER */
    this.map.on('zoomend', (event) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    /* MAP MOVE LISTENER */
    this.map.on('move', (event) => {
      const target = event.target;

      const { lng, lat } = target.getCenter();

      this.center = [lng, lat];
    });
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }
}
