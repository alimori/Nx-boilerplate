import { Component } from '@angular/core';
import { MenuItem } from '@sample/shared/ui-sidebar';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Application B';
  menuItems: MenuItem[] = [
    { text: "Menu Item A" },
    { text: "Menu Item B" },
    { text: "Menu Item C" },
    { text: "Menu Item D" },
    { text: "Menu Item E" },
    { text: "Menu Item F" },
    { text: "Menu Item G" },
    { text: "Menu Item H" },
    { text: "Menu Item J" },
    { text: "Menu Item I" }
  ]
}
