import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-http',
  templateUrl: './ng-http.component.html',
  styleUrls: ['./ng-http.component.css']
})
export class NgHttpComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-HTTP';

  constructor() { }

  ngOnInit(): void {

  }

}
