import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgCliComponent } from './ng-cli/ng-cli.component';
import { NgRouterComponent } from './ng-router/ng-router.component';
import { NgHttpComponent } from './ng-http/ng-http.component';
import { NgFormsComponent } from './ng-forms/ng-forms.component';
import { NgI18nComponent } from './ng-i18n/ng-i18n.component';
import { NgTestingComponent } from './ng-testing/ng-testing.component';
import { NgLanguageServicesComponent } from './ng-language-services/ng-language-services.component';
import { NgUniversalComponent } from './ng-universal/ng-universal.component';
import { NgAnimationsComponent } from './ng-animations/ng-animations.component';
import { NgMaterialCdkComponent } from './ng-material-cdk/ng-material-cdk.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cli', component: NgCliComponent },
    { path: 'router', component: NgRouterComponent },
    { path: 'http', component: NgHttpComponent },
    { path: 'forms', component: NgFormsComponent },
    { path: 'animations', component: NgAnimationsComponent },
    { path: 'i18n', component: NgI18nComponent },
    { path: 'testing', component: NgTestingComponent },
    { path: 'language-services', component: NgLanguageServicesComponent },
    { path: 'universal', component: NgUniversalComponent },
    { path: 'material-cdk', component: NgMaterialCdkComponent }
  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
