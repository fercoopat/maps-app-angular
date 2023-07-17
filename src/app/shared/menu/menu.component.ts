import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menuPages: MenuItem[] = [
    { name: 'FullScreen', route: 'fullscreen' },
    { name: 'Zoom Range', route: 'zoom-range' },
    { name: 'Markups', route: 'markups' },
    { name: 'Properties', route: 'properties' },
  ];
}
