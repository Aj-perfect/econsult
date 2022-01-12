import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { FirebaseService } from './services/firebase.service';




@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HomeModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCBPiqiISnM_YIL2vLzP7oRyWd-jjp_N2c",
        authDomain: "econsult-1c355.firebaseapp.com",
        projectId: "econsult-1c355",
        storageBucket: "econsult-1c355.appspot.com",
        messagingSenderId: "917117378377",
        appId: "1:917117378377:web:8e4402869668186f14c498"
      }     
    ),
  ],
  providers: [HttpClientModule, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
