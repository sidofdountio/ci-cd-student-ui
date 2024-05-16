import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [

    AppComponent,
    ProfileComponent,
    StudentComponent,
    PageNotFoundComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
