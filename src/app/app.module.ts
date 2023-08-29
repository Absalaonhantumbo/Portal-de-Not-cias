import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { CategoriesComponent } from './containes/categories/categories.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticlesItemComponent } from './containes/categories/articles-item/articles-item.component';
import {MatCardModule} from "@angular/material/card";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginPagesComponent,
    NavBarComponent,
    CategoriesComponent,
    ArticlesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    HttpClientModule,
    MatCardModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
