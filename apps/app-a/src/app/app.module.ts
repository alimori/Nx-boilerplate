import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SharedUiHeaderModule } from '@sample/shared/ui-header';
import { SharedUiSidebarModule } from '@sample/shared/ui-sidebar';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedUiHeaderModule,
    SharedUiSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
