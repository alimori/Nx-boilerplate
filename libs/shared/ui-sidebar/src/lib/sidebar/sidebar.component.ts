import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Input('menuItems') menuItems!: MenuItem[];
  constructor() { }

  ngOnInit(): void { }
}

export class MenuItem {
  text!: string;
  command?: string;
}
