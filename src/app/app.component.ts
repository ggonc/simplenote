import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'notepad';
  opened = true;

  // showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
