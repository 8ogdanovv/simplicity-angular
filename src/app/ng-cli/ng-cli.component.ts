import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ng-cli',
  templateUrl: './ng-cli.component.html',
  styleUrls: ['./ng-cli.component.css']
})
export class NgCliComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-CLI';

  constructor() { }

  ngOnInit(): void {
  }

}
