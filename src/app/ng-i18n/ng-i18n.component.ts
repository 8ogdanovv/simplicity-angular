import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-i18n',
  templateUrl: './ng-i18n.component.html',
  styleUrls: ['./ng-i18n.component.css']
})
export class NgI18nComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-i18n';

  constructor() { }

  ngOnInit(): void {
  }

}
