import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-material-cdk',
  templateUrl: './ng-material-cdk.component.html',
  styleUrls: ['./ng-material-cdk.component.css']
})
export class NgMaterialCdkComponent implements OnInit {
  title: string = ' HOW IT WORKS?!..';
  mainTitle: string = 'NG-MAERIAL&CDK';

  constructor() { }

  ngOnInit(): void {
  }

}
