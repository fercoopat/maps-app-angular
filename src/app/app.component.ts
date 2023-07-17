import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    (mapboxgl as any).accessToken =
      'pk.eyJ1IjoiZmVyY29vcGF0IiwiYSI6ImNsazVpbWVwaDE0bGgzdHFvMnhudXh4eWMifQ.lnVDWDLRcy3F0W44FhELFQ';
  }
}
