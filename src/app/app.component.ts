import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme = 'light';

  constructor(private router: Router) {
    this.router = router;
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  toggleTheme() {
    if (localStorage.getItem('theme') === 'light') this.theme = 'dark';
    else this.theme = 'light';
    localStorage.setItem('theme', this.theme);
  }


  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById('backUpButton').style.display = 'block';
    } else {
      document.getElementById('backUpButton').style.display = 'none';
    }
  }

  ngOnInit() {
    if (!localStorage.getItem('theme'))
      localStorage.setItem('theme', 'light');
    this.theme = localStorage.getItem('theme');
  }
}
