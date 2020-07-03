import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductServiceService } from "./product-service.service";

import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationBarComponent,
    HeaderComponent,
    UserComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
