import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface MarkerColor {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
}

@Component({
  selector: 'app-markups',
  templateUrl: './markups.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MarkupsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!: ElementRef;

  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-82.43022255503733, 23.111867119646554];
  markers: MarkerColor[] = [];

  constructor() {}

  ngOnDestroy(): void {
    this.map.off('dragend', () => {});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.getMarkersOfLocalStorage();
  }

  addMarker() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const newMarker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.center)
      .addTo(this.map);

    this.markers.push({ marker: newMarker, color });

    this.setMarkersToLocalStorage();

    newMarker.on('dragend', () => {
      this.setMarkersToLocalStorage();
    });
  }

  goToMarker(marker: mapboxgl.Marker | undefined) {
    this.map.flyTo({
      center: marker!.getLngLat(),
    });
  }

  setMarkersToLocalStorage() {
    const lngLatArr: MarkerColor[] = [];

    this.markers.forEach((marker) => {
      const color = marker.color;
      const { lng, lat } = marker.marker!.getLngLat();

      lngLatArr.push({ color, center: [lng, lat] });
    });

    localStorage.setItem('markers', JSON.stringify(lngLatArr));
  }

  getMarkersOfLocalStorage() {
    if (!localStorage.getItem('markers')) return;

    const lngLatArr: MarkerColor[] = JSON.parse(
      localStorage.getItem('markers')!
    );

    lngLatArr.forEach((marker) => {
      const newMarker = new mapboxgl.Marker({
        color: marker.color,
        draggable: true,
      })
        .setLngLat(marker.center!)
        .addTo(this.map);

      this.markers.push({ marker: newMarker, color: marker.color });

      newMarker.on('dragend', () => {
        this.setMarkersToLocalStorage();
      });
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker?.remove();

    this.markers.splice(index, 1);

    this.setMarkersToLocalStorage();
  }
}
