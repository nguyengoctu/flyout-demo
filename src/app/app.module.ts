import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppSkyModule } from './app-sky.module';

import {
  ListState,
  ListStateDispatcher
} from '@skyux/list-builder/modules/list/state';
import { SkyFlyoutDemoComponent } from './demo/flyout-demo.component';
import { SkyFlyoutDemoInternalComponent } from './demo/flyout-demo-internal.component';
import { SkyFlyoutDemoInternalSimpleComponent } from './demo/flyout-demo-internal-simple.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppSkyModule
  ],
  declarations: [
    AppComponent,
    SkyFlyoutDemoComponent,
SkyFlyoutDemoInternalComponent,
SkyFlyoutDemoInternalSimpleComponent
  ],
  entryComponents: [
    SkyFlyoutDemoInternalComponent,
SkyFlyoutDemoInternalSimpleComponent
  ],
  providers: [ ListState, ListStateDispatcher ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }