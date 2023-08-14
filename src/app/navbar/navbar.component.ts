import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  displayName: string = '';
  constructor(public pageService: PageService) {}

  getDisplayName(): void {
    this.pageService
      .getDisplayName()
      .subscribe((displayName) => (this.displayName = displayName));
  }

  ngOnInit(): void {
    this.getDisplayName();
  }
}
