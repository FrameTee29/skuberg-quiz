import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';
import { MovieComponent } from './movie/movie.component';
import { MovieModule } from './movie/movie.module';
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzMessageService } from 'ng-zorro-antd/message'


registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, HomeComponent, TodoComponent, MovieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzDividerModule,
    HomeModule,
    TodoModule,
    MovieModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
