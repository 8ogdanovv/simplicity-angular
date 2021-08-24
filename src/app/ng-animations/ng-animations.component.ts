import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-animations',
  templateUrl: './ng-animations.component.html',
  styleUrls: ['./ng-animations.component.css']
})
export class NgAnimationsComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-ANIMATIONS';

  constructor() { }

  ngOnInit(): void {
  }

}
