import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  FullScreenComponent,
  MarkupsComponent,
  PropertiesComponent,
  ZoomRangeComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullScreenComponent },
      { path: 'zoom-range', component: ZoomRangeComponent },
      { path: 'markups', component: MarkupsComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
