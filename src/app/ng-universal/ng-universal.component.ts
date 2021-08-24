import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-universal',
  templateUrl: './ng-universal.component.html',
  styleUrls: ['./ng-universal.component.css']
})
export class NgUniversalComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-UNIVERSAL';

  constructor() { }

  ngOnInit(): void {
  }

}
