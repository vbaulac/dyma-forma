import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { ReqInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
