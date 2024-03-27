import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, RouterLink, RouterOutlet, RouterModule, HttpClientModule, MatProgressSpinnerModule
      
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
