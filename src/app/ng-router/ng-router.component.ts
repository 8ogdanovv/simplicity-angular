import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-router',
  templateUrl: './ng-router.component.html',
  styleUrls: ['./ng-router.component.css']
})
export class NgRouterComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-ROUTER';

  constructor() { }

  ngOnInit(): void {
  }

}
