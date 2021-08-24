import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-testing',
  templateUrl: './ng-testing.component.html',
  styleUrls: ['./ng-testing.component.css']
})
export class NgTestingComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-TESTING';

  constructor() { }

  ngOnInit(): void {
  }

}
