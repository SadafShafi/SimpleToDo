import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// @angular/core
//  - @angular/common
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { File } from '@ionic-native/file/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { IonicStorageModule } from '@ionic/storage';
// import { Drivers, Storage } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  //   IonicStorageModule.forRoot({
  //   name: '__mydb',
  //   driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
  // })
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
