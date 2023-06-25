import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedUiHeaderModule } from '@sample/shared/ui-header';
import { SharedUiSidebarModule } from '@sample/shared/ui-sidebar';
import { UserManagementAuthFeatureAuthModule } from '@sample/user-management/auth/feature-auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiHeaderModule,
    SharedUiSidebarModule,


    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'auth/login'
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('@sample/user-management/auth/feature-auth').then(
              (module) => module.UserManagementAuthFeatureAuthModule
            ),
        },
        {
          path: '**',
          redirectTo: 'auth/login'
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),

    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
