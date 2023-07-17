import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';

import { MiniMapComponent } from './components';
import {
  FullScreenComponent,
  MarkupsComponent,
  ZoomRangeComponent,
  PropertiesComponent,
} from './pages';

@NgModule({
  declarations: [
    MiniMapComponent,
    FullScreenComponent,
    MarkupsComponent,
    ZoomRangeComponent,
    PropertiesComponent,
  ],
  imports: [
    CommonModule,
    /* ROUTING */
    MapsRoutingModule,
  ],
})
export class MapsModule {}
