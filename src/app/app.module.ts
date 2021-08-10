import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCliComponent } from './ng-cli/ng-cli.component';
import { NgRouterComponent } from './ng-router/ng-router.component';
import { NgHttpComponent } from './ng-http/ng-http.component';
import { NgFormsComponent } from './ng-forms/ng-forms.component';
import { NgAnimationsComponent } from './ng-animations/ng-animations.component';
import { NgI18nComponent } from './ng-i18n/ng-i18n.component';
import { NgTestingComponent } from './ng-testing/ng-testing.component';
import { NgLanguageServicesComponent } from './ng-language-services/ng-language-services.component';
import { NgUniversalComponent } from './ng-universal/ng-universal.component';
import { NgMaterialCdkComponent } from './ng-material-cdk/ng-material-cdk.component';


@NgModule({
  declarations: [
    AppComponent,
    NgCliComponent,
    NgRouterComponent,
    NgHttpComponent,
    NgFormsComponent,
    NgAnimationsComponent,
    NgI18nComponent,
    NgTestingComponent,
    NgLanguageServicesComponent,
    NgUniversalComponent,
    NgMaterialCdkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
