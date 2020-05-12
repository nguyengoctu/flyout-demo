import {
  NgModule
} from '@angular/core';

import { SkyFlyoutModule } from '@skyux/flyout';
import { SkyListModule } from '@skyux/list-builder';
import { SkyListViewGridModule } from '@skyux/list-builder-view-grids';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyPageSummaryModule } from '@skyux/layout';
import { SkyKeyInfoModule,SkyLabelModule } from '@skyux/indicators';


@NgModule({
  exports: [
    SkyFlyoutModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyAvatarModule,
    SkyPageSummaryModule,
    SkyKeyInfoModule,
    SkyLabelModule
  ]
})
export class AppSkyModule { }
