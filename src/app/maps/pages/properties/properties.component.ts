import { Component } from '@angular/core';

interface Property {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styles: [],
})
export class PropertiesComponent {
  properties: Property[] = [
    {
      title: 'Casa residential, Canada',
      description: 'Bella property en Katana, Canada',
      lngLat: [-75.92722289474008, 45.280015511264466],
    },
    {
      title: 'Casa de playa, Mexico',
      description: 'Beautiful casa de playa en Acapulco, Mexico',
      lngLat: [-99.91287720907991, 16.828940930185748],
    },
    {
      title: 'Apartment, Argentina',
      description: 'Luxury apartment en el heart de Buenos Aires, Argentina',
      lngLat: [-58.430166677283445, -34.57150108832866],
    },
    {
      title: 'Local comercial, Spain',
      description:
        'Local comercial available en Madrid, Spain, near de El Garden Secret.',
      lngLat: [-3.7112735618380177, 40.42567285425766],
    },
  ];
}
