import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigationIsOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onHandleNav() {
    this.navigationIsOpen = !this.navigationIsOpen;
  }
}
