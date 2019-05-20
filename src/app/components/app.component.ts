import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'movie-category-comparator';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {path: '/avglength', label: 'Average Movie Length', index: 1},
      {path: '/avgrating', label: 'Average Movie Rating', index: 2},
      {path: '/longest', label: 'Longest Movies', index: 3},
      {path: '/shortest', label: 'Shortest Movies', index: 4},
      {path: '/bestrated', label: 'Best Rated Movies', index: 5},
      {path: '/worstrated', label: 'Worst Rated Movies', index: 6}
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
