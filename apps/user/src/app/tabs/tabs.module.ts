
import { NgModule } from '@angular/core';
import { SharedModule } from '@doc-avail/modules';


import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [SharedModule, TabsPageRoutingModule],
  declarations: [TabsPage],
})
export class TabsPageModule {}
