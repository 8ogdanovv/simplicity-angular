import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.css']
})
export class NgFormsComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-FORMS';

  constructor() { }

  ngOnInit(): void {
  }

}
