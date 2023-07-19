import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './services/http.service';
import { MainModule } from './main/main.module';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    SharedModule,
    MainModule
  ],
  providers: [HttpService,
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
