import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  opened = true;
  error = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url == "a")
    this.error = true
  }

}
