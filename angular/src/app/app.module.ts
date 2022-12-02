import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { materialModules } from './types/material-modules';
import { AppRouterModule } from './shared/routers/app-router.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptorService } from './services/http-interceptor.service';
import { personalModule } from './modules/personal/personal.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ...materialModules,
    AppRouterModule,
    AuthModule,
    personalModule
  ],
  exports: [AppComponent, NavigationComponent],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
